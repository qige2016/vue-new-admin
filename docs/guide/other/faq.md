# 常见问题

## Git Hooks失效

本项目使用了pre-commit和commit-msg钩子，如果在提交代码时没有相应过程即为Git Hooks失效。
解决方法：
- 查看本地项目中.git文件夹是否有hooks文件夹
- 删除仓库后重新拷贝，再重复第一步