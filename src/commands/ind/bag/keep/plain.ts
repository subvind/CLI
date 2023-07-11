import {Command} from '@oclif/core'
import {cwd} from 'node:process'

export default class Plain extends Command {
  static description = 'build "bag.inom" into machine code'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log(`current directory: ${cwd()}`)
    this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
