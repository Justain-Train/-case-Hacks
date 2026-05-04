import fs from 'fs';
import path from 'path';

const headshotsDir = './src/assets/headshots';
const outputFile = './src/data/team-generated.ts';

function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

function generateName(id) {
  // Handle special cases like justinT -> Justin T
  if (id.includes('T') && id.length > 1) {
    return capitalize(id.replace('T', ' T'));
  }
  return capitalize(id);
}

function generateTeamData() {
  const files = fs.readdirSync(headshotsDir);
  const members = [];

  files.forEach(file => {
    const ext = path.extname(file);
    const id = path.basename(file, ext);
    const name = generateName(id);
    const headshot = `import ${id} from "./../assets/headshots/${file}";`;
    const alt = `${name} headshot`;

    members.push({
      id,
      name,
      position: "",
      headshot: id,
      alt
    });
  });

  // Generate imports
  const imports = files.map(file => {
    const ext = path.extname(file);
    const id = path.basename(file, ext);
    return `import ${id} from "./../assets/headshots/${file}";`;
  }).join('\n');

  // Generate type
  const typeDef = `
type TeamMember = {
  id: string;
  name: string;
  position: string;
  headshot: string;
  alt: string;
};
`;

  // Generate array
  const array = `
export const TEAM_MEMBERS: TeamMember[] = [
${members.map(member => `  {
    id: "${member.id}",
    name: "${member.name}",
    position: "${member.position}",
    headshot: ${member.headshot},
    alt: "${member.alt}",
  },`).join('\n')}
];
`;

  const content = imports + '\n' + typeDef + array;

  fs.writeFileSync(outputFile, content);
  console.log(`Generated team data in ${outputFile}`);
  console.log('You can now copy the content to src/data/team.ts and fill in the positions.');
}

generateTeamData();