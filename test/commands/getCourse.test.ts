import {expect, test} from '@oclif/test'

describe('getCourse', () => {
  test
    .stdout()
    .command(['getCourse'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['getCourse', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
