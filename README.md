### Prerequisites:
- Change Packages should be stored under `REPO_PATH`
- To use workflows user must create key pair used to connect via `SFTP` with remote server and have permissions to connect and upload using these credentials.
- For workflow 'Create Change Package on change' path to the repository (`stibo-user` in the following example) needs to be directly modified, here is the fragment where change has to be applied:
  ```
  on:
  push:
    branches: [ "main" ]
    paths:
      - 'stibo-user/**'
  ```
  optionally branch name also can be modiefied.

### Following secrets and variables must be provided
` Settings -> Secrets and Variables -> Actions`

#### Secrets:
- `REMOTE_HOST` - url of SFTP host.
- `USERNAME` - username used to connect to remote host with priviledges to upload.
- `KEY` - SSH private key of user.

Above secrets are used by external action: https://github.com/wangyucode/sftp-upload-action and there are more info about possible parameters. They can be applied only to job `SFTP uploader`.

#### Variables:
- `REPO_PATH` - path of the repository containing CP's followed by forward slash. In this case `stibo-user/`.
