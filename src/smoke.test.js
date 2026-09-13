import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { nav, profile } from './data/content';

test('renders every section', () => {
  render(<App />);
  // Derived from the nav data, so renaming or removing a section updates the
  // test with it instead of failing on a stale hardcoded list.
  nav.forEach(({ label }) => {
    expect(screen.getAllByText(label).length).toBeGreaterThan(0);
  });
  // Don't pin the wording — guard the structural bug instead. The two halves
  // are separate grid rows, so without a trailing space inside the first span
  // textContent (and some screen readers) run the words together.
  const title = document.querySelector('.hero__title');
  const top = title.querySelector('.hero__titleTop');
  expect(title.textContent.trim().length).toBeGreaterThan(20);
  expect(top.textContent).toMatch(/\s$/);
  expect(title.textContent.replace(/\s+/g, ' ')).not.toMatch(/[a-z][A-Z]/);
  expect(screen.getAllByText('tushar55755575@gmail.com').length).toBeGreaterThan(0);
});

test('every hero figure is accompanied by context explaining it', () => {
  render(<App />);
  const facts = document.querySelectorAll('.fact');
  expect(facts.length).toBeGreaterThan(0);
  facts.forEach((f) => {
    // A bare number is the thing we are guarding against.
    expect(f.querySelector('.fact__label').textContent.length).toBeGreaterThan(8);
    expect(f.querySelector('.fact__context').textContent.length).toBeGreaterThan(20);
  });
});

test('no context-free percentage is used as a headline figure', () => {
  render(<App />);
  document.querySelectorAll('.fact__value').forEach((el) => {
    expect(el.textContent).not.toMatch(/^\+\d+%$/);
  });
});

test('featured work item starts expanded, others toggle', () => {
  render(<App />);
  const featured = screen.getByRole('button', { name: /Real-Time Event Ingestion Pipeline/ });
  expect(featured.getAttribute('aria-expanded')).toBe('true');
  const linkBuilder = screen.getByRole('button', { name: /LinkBuilder/ });
  expect(linkBuilder.getAttribute('aria-expanded')).toBe('false');
  fireEvent.click(linkBuilder);
  expect(linkBuilder.getAttribute('aria-expanded')).toBe('true');
});

test('FAQ opens and closes', () => {
  render(<App />);
  const q = screen.getByRole('button', { name: /What kind of work do you take on/ });
  expect(q.getAttribute('aria-expanded')).toBe('true');
  fireEvent.click(q);
  expect(q.getAttribute('aria-expanded')).toBe('false');
});

test('contact CTAs open a menu instead of firing a bare mailto', () => {
  render(<App />);
  const cta = screen.getAllByRole('button', { name: /Let's Connect/ })[0];
  const panel = cta.closest('.cmenu').querySelector('.cmenu__pop');

  expect(cta.getAttribute('aria-expanded')).toBe('false');
  expect(panel.hidden).toBe(true);

  fireEvent.click(cta);
  expect(cta.getAttribute('aria-expanded')).toBe('true');
  expect(panel.hidden).toBe(false);

  const gmail = panel.querySelector('a[href*="mail.google.com"]');
  expect(gmail).toBeTruthy();
  expect(gmail.getAttribute('href')).toContain(encodeURIComponent('tushar55755575@gmail.com'));
  expect(panel.querySelector('a[href^="mailto:"]')).toBeTruthy();

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(cta.getAttribute('aria-expanded')).toBe('false');
});

test('the only mailto link is the one the visitor explicitly chooses', () => {
  render(<App />);
  const mailtos = [...document.querySelectorAll('a[href^="mailto:"]')];
  mailtos.forEach((a) => {
    expect(a.textContent.toLowerCase()).toMatch(/mail app/);
  });
});

test('mobile menu toggles and closes on Escape', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /Open menu/ });
  fireEvent.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
});

test('copy button reports success', async () => {
  const writeText = jest.fn().mockResolvedValue();
  Object.assign(navigator, { clipboard: { writeText } });
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Copy' }));
  expect(writeText).toHaveBeenCalledWith('tushar55755575@gmail.com');
  expect(await screen.findByText('Copied')).toBeTruthy();
});

test('every nav link points at a section that actually renders', () => {
  render(<App />);
  nav.forEach(({ id }) => {
    expect(document.getElementById(id)).not.toBeNull();
  });
});

test('resume link matches whatever is configured', () => {
  render(<App />);
  const links = [...document.querySelectorAll('a')]
    .filter((a) => /r[eé]sum[eé]/i.test(a.textContent));

  if (!profile.resume) {
    // Nothing configured: no placeholder or dead link may ship.
    expect(links).toHaveLength(0);
    return;
  }

  expect(links.length).toBeGreaterThan(0);
  links.forEach((a) => {
    const href = a.getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).not.toBe('#');
    if (profile.resume.startsWith('/')) {
      // Local PDF must carry the deploy base path, or it 404s on Pages.
      expect(href).toContain(profile.resume);
      expect(a.hasAttribute('download')).toBe(true);
    } else {
      expect(href).toBe(profile.resume);
      expect(a.getAttribute('rel')).toContain('noreferrer');
    }
  });
});

test('no invented technologies and no fabricated testimonials', () => {
  render(<App />);
  ['Python', 'AWS', 'Kubernetes', 'GraphQL', 'Django', 'FastAPI', 'NestJS', 'Angular', 'Vue']
    .forEach((banned) => expect(screen.queryByText(banned)).toBeNull());
  expect(document.querySelector('.testimonial')).toBeNull();
  expect(screen.queryByText(/Testimonial/i)).toBeNull();
});
