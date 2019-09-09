import {expect, test} from '@oclif/test'

describe('addCourse', () => {
  test
    .stdout()
    .command(['addCourse'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['addCourse', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
