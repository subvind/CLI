import {Command} from '@oclif/core'
import {cwd} from 'node:process'

export default class File extends Command {
  static description = 'config a file in "envelop.inom"'

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
