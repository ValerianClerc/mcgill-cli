import {expect, test} from '@oclif/test'

describe('getTranscript', () => {
  test
    .stdout()
    .command(['getTranscript'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['getTranscript', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
