# mcgill-cli

A CLI to interact with McGill University&#39;s online resources

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mcgill-cli.svg)](https://npmjs.org/package/mcgill-cli)
[![Codecov](https://codecov.io/gh/ValerianClerc/mcgill-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/ValerianClerc/mcgill-cli)
[![Downloads/week](https://img.shields.io/npm/dw/mcgill-cli.svg)](https://npmjs.org/package/mcgill-cli)
[![License](https://img.shields.io/npm/l/mcgill-cli.svg)](https://github.com/ValerianClerc/mcgill-cli/blob/master/package.json)

<!-- toc -->

- [mcgill-cli](#mcgill-cli)
- [Usage](#usage)
- [Commands](#commands)
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

- [`mcgill addCourse`](#mcgill-addcourse)
- [`mcgill getCourse`](#mcgill-getcourse)
- [`mcgill getTranscript`](#mcgill-gettranscript)
- [`mcgill help [COMMAND]`](#mcgill-help-command)
- [`mcgill watch`](#mcgill-watch)

## `mcgill addCourse`

addCourse signs you up for a course (by CRN)

```
USAGE
  $ mcgill addCourse

OPTIONS
  -c, --crn=crn            CRN code for desired class
  -h, --help               show CLI help
  -p, --password=password  minerva password
  -s, --season=season      season as 1 letter: 'f' for fall, 'w' for winter, 's' for summer
  -u, --username=username  minerva username (mcgill email)
  -y, --year=year          year of class
```

_See code: [src/commands/addCourse.ts](https://github.com/ValerianClerc/mcgill-cli/blob/v0.0.0/src/commands/addCourse.ts)_

## `mcgill getCourse`

getCourse returns the information for a specific course

```
USAGE
  $ mcgill getCourse

OPTIONS
  -S, --subject=subject    class/department subject (ex: "COMP")
  -h, --help               show CLI help
  -n, --classNum=classNum  class number (ex: "303" for COMP 303
  -p, --password=password  minerva password
  -s, --season=season      season as 1 letter: 'f' for fall, 'w' for winter, 's' for summer
  -u, --username=username  minerva username (mcgill email)
  -y, --year=year          year of class
```

_See code: [src/commands/getCourse.ts](https://github.com/ValerianClerc/mcgill-cli/blob/v0.0.0/src/commands/getCourse.ts)_

## `mcgill getTranscript`

getTranscript retrieves current transcript from Minerva

```
USAGE
  $ mcgill getTranscript

OPTIONS
  -c, --current            current year only
  -h, --help               show CLI help
  -p, --password=password  minerva password
  -u, --username=username  minerva username (mcgill email)
```

_See code: [src/commands/getTranscript.ts](https://github.com/ValerianClerc/mcgill-cli/blob/v0.0.0/src/commands/getTranscript.ts)_

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

## `mcgill watch`

describe the command here

```
USAGE
  $ mcgill watch

OPTIONS
  -h, --help       show CLI help
```

_See code: [src/commands/watch.ts](https://github.com/ValerianClerc/mcgill-cli/blob/v0.0.0/src/commands/watch.ts)_

<!-- commandsstop -->
