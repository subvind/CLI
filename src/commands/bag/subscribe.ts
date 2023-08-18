import {Args, Command, Flags} from '@oclif/core'

export default class Subscribe extends Command {
  static description = 'subscribe to a "bag.inam" code broadcast'

  static examples = [
    `$ inam hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Subscribe)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
