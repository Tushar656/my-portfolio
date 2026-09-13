// Brand icons + their official colors, so the stack reads visually and not as
// a wall of text. Anything without a real brand mark falls back to a Lucide glyph.
import {
  SiC, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux,
  SiReactrouter, SiSocketdotio, SiHtml5, SiCss, SiSass, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiClickhouse,
  SiRedis, SiApachekafka, SiGit, SiGithub, SiDocker, SiPostman, SiNpm,
  SiIntellijidea, SiApachesuperset, SiPrisma, SiOpenjdk,
} from 'react-icons/si';
import {
  LuDatabase, LuNetwork, LuLayers, LuCode, LuSmartphone,
} from 'react-icons/lu';

export const techIcons = {
  'C/C++':          { Icon: SiCplusplus,     color: '#00599C' },
  'C':              { Icon: SiC,             color: '#A8B9CC' },
  'JavaScript':     { Icon: SiJavascript,    color: '#F7DF1E' },
  'TypeScript':     { Icon: SiTypescript,    color: '#3178C6' },
  'SQL':            { Icon: LuDatabase,      color: '#8FA6FF' },
  'React.js':       { Icon: SiReact,         color: '#61DAFB' },
  'React':          { Icon: SiReact,         color: '#61DAFB' },
  'Next.js':        { Icon: SiNextdotjs,     color: '#EDEDED' },
  'React Native':   { Icon: LuSmartphone,    color: '#61DAFB' },
  'Redux':          { Icon: SiRedux,         color: '#764ABC' },
  'React Router':   { Icon: SiReactrouter,   color: '#CA4245' },
  'Socket.io':      { Icon: SiSocketdotio,   color: '#C9C9C9' },
  'HTML5':          { Icon: SiHtml5,         color: '#E34F26' },
  'CSS3':           { Icon: SiCss,           color: '#1572B6' },
  'SCSS':           { Icon: SiSass,          color: '#CC6699' },
  'Tailwind CSS':   { Icon: SiTailwindcss,   color: '#06B6D4' },
  'Node.js':        { Icon: SiNodedotjs,     color: '#5FA04E' },
  'Express':        { Icon: SiExpress,       color: '#C9C9C9' },
  'Express.js':     { Icon: SiExpress,       color: '#C9C9C9' },
  'REST APIs':      { Icon: LuNetwork,       color: '#8FA6FF' },
  'PostgreSQL':     { Icon: SiPostgresql,    color: '#4169E1' },
  'MySQL':          { Icon: SiMysql,         color: '#4479A1' },
  'MongoDB':        { Icon: SiMongodb,       color: '#47A248' },
  'ClickHouse':     { Icon: SiClickhouse,    color: '#FFCC00' },
  'Redis':          { Icon: SiRedis,         color: '#FF4438' },
  'Kafka':          { Icon: SiApachekafka,   color: '#C9C9C9' },
  'BullMQ':         { Icon: LuLayers,        color: '#E8734A' },
  'Git':            { Icon: SiGit,           color: '#F05032' },
  'GitHub':         { Icon: SiGithub,        color: '#EDEDED' },
  'Docker':         { Icon: SiDocker,        color: '#2496ED' },
  'Postman':        { Icon: SiPostman,       color: '#FF6C37' },
  'npm':            { Icon: SiNpm,           color: '#CB3837' },
  'VS Code':        { Icon: LuCode,          color: '#007ACC' },
  'IntelliJ IDEA':  { Icon: SiIntellijidea,  color: '#FE2857' },
  'Context API':    { Icon: SiReact,         color: '#61DAFB' },
  'Prisma':         { Icon: SiPrisma,        color: '#5A67D8' },
  'Java':           { Icon: SiOpenjdk,       color: '#F89820' },
  'Apache Superset':{ Icon: SiApachesuperset,color: '#20A7C9' },
};

export function getTechIcon(name) {
  return techIcons[name] || null;
}
