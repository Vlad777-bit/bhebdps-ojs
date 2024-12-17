import { Player } from './players/Player.js';
import chalk from 'chalk';
import dedent from 'dedent';

const user = new Player('V');

console.log(dedent`
    ${chalk.bgGreen(' SUCCESS ')}

    ${user.getName()}
`);
