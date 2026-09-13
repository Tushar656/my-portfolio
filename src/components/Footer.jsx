import { profile } from '../data/content';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot__inner">
        <p className="foot__who">
          {profile.name}
          <span aria-hidden="true"> · </span>
          <span className="foot__role">{profile.role}</span>
        </p>
        <p className="foot__built">Built with React and SCSS</p>
      </div>
    </footer>
  );
}
