---
layout: default
title:  "Git commands"
categories: [general]
---

I created this reference for myself in a note-taking app called Bear. Worth sharing as things covers pretty much everything I need to do.

# Git commands etc
- - - -
## to clone repo
`git clone [address]`

add `.` to clone in place

to clone using alias
`git clone [alias]:[repo address]`

you can configure alias in .ssh > config
`personal`

## To clone a repo into a new folder that already has something in it
`git init` 
`git remote add origin [repo] `
`git fetch `
`git checkout -t origin/master`

- - - -
## to create new repo
`git init` 

add `.` to clone in folder

Create new repo in place

`git init .`
`git add .`
`git commit -m start`

- - - -
## to add origin
`git remote add origin [address]`

add `.` to clone in place

to clone using alias
`git remote add origin [alias]:[repo address]`

- - - -
## Staging
stage all new files
`git add .`

unstage
`git reset`

- - - -
## to commit
`git commit -m "Commit message"`

- - - -
## Revert to previous commit
Find out commit ID you want to revert to
`git log`

`git checkout [commit ID]`

- - - -
## Pushing
To push
`git push origin [branch]`

To push the current branch and set the remote as upstream, use
`git push --set-upstream origin [branch]`

to overwrite what’s on remote without having to pull
`git push -f origin master`

- - - -
## Branching
create new local branch
`$ git checkout -b [name_of_your_new_branch]`

Push new branch to remote
`git push -u origin [branch_name]`

delete local branch
`git branch -d [branch name]`

rename local branch
`git branch -m [new-name]`

checkout to master branch
`git checkout master`

merge branch into master
`git merge [branchname]`

- - - -
## Changing things
discard local changes and reset to remote master
`git fetch —all && git reset —hard origin/master`

Remove origin
`### $ git remote rm origin`

- - - -
## Add .gitignore
`git add .gitignore`

- - - -
## Check things
check status
`git status`

check remote repo
`git remote show origin`

See commit history
`git log`

- - - -
## VIM
If you want to use vim, type i to type in your message. When happy hit ESC. Then type :wq , and git will then be happy.

- - - -
## Get help
`git help`
if something didn’t work, run the command again with git help prefix, for example
`git help clone`