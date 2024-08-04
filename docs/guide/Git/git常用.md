
1：git clone [远程仓库地址]
2：git checkout -b [分支名称] 在本地创建并切换到该分支
在该分支上更改提交后如果远程没有该分支
3：git push origin [本地创建的分支及第二步骤创建的分支] 就会自动在远程仓库创建该分支
别人如果想要切换到你的分支
4：git fetach origin 同步远程分支
5：git checkout [分支名称] 
6：git branch 查看所以本地分支
7：git branch -r 查看远程所以分支
如果想讲本地lx分支的更改直接push到远程的zs分支
8：git push origin lx/zs 会直接把这次在lx分支上的更改直接push到远程zs分支上，但是lx分支没有push上去需要重新git push origin lx