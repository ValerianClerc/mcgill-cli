mcgill-cli
==========

A CLI to interact with McGill University&#39;s online resources

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mcgill-cli.svg)](https://npmjs.org/package/mcgill-cli)
[![Codecov](https://codecov.io/gh/ValerianClerc/mcgill-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/ValerianClerc/mcgill-cli)
[![Downloads/week](https://img.shields.io/npm/dw/mcgill-cli.svg)](https://npmjs.org/package/mcgill-cli)
[![License](https://img.shields.io/npm/l/mcgill-cli.svg)](https://github.com/ValerianClerc/mcgill-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mcgill-cli
$ mcgill COMMAND
running command...
$ mcgill (-v|--version|version)
mcgill-cli/0.0.0 darwin-x64 node-v12.9.0
$ mcgill --help [COMMAND]
USAGE
  $ mcgill COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mcgill getTranscript [FILE]`](#mcgill-gettranscript-file)
* [`mcgill hello [FILE]`](#mcgill-hello-file)
* [`mcgill help [COMMAND]`](#mcgill-help-command)

## `mcgill getTranscript [FILE]`

describe the command here

```
USAGE
  $ mcgill getTranscript [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/getTranscript.ts](https://github.com/ValerianClerc/mcgill-cli/blob/v0.0.0/src/commands/getTranscript.ts)_

## `mcgill hello [FILE]`

describe the command here

```
USAGE
  $ mcgill hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mcgill hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ValerianClerc/mcgill-cli/blob/v0.0.0/src/commands/hello.ts)_

## `mcgill help [COMMAND]`

display help for mcgill

```
USAGE
  $ mcgill help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
