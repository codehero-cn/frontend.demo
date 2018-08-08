::this bat is used to deploy project on github.com gh-pages 注意此项目是作为独立项目git时使用
::authoer eleven
rem ##################### build project ######################
::build project and will create /disk directory
call npm run build

rem ###################  git gh-pages   ###################
::before deploy ,you must del the gh-pages branch on the github
copy /y .\CNAME  .\dist\CNAME
if exist .\.git\index.lock (del .git\index.lock) else (echo index.lock is not exist)
if exist .\.git\.COMMIT_EDITMSG.swp (del .git\.COMMIT_EDITMSG.swp) else (echo COMMIT_EDITMSG.swp is not exist)
git add ./dist/
git commit ./dist/ --amend  -m "deploy git gh-pages"
git subtree push --prefix=dist/ github_vue-demo gh-pages --squash
rem ######  success!!!now you can browser  http://***.com ######
