### Prerequisites:
- Change Packages must be stored under a folder below the branch, such as the name of the system where the change package was created or another grouping name. This folder is defined and created by the Directory Template field in the OIEP delivery configuration using 'Change Package Git Delivery' method (e.g., '$systemname$/$changepackageid$'). Specifically, the folder label is based on '$systemname$' in this example, and it will be used when defining the `REPO_PATH` variable.
- To use workflows, the user must create public/private key pairs, which are also used to connect via SFTP from a local computer, using Open SSH format, where the key starts with '-----BEGIN OPENSSH PRIVATE KEY-----' and ends with '-----END OPENSSH PRIVATE KEY-----'. The remote server must have permissions to connect and upload using these credentials. It is recommended to set up a local SCP/SFTP client on your computer to confirm access to the SFTP and the ability to write a file to confirm permissions before setting up this automation.
- When your repository does not have any actions configured, click 'set up a workflow yourself' so the '.github/workflows' directory will be created and add an empty file 'Main.yml', which will be deleted later.  Import the three files in this ZIP to the workflows directory and make the changes mentioned below for 'Send Change Package on Change'. Delete the 'Main.yml' file.
- For the workflow 'Send Change Package on Change', update the branch if you are using something other than "main" and set the 'paths:' value to the folder that is monitored for changes within the repository. Prior to running the action, update this code, replacing `stibo-user` with the value that REPO_PATH resolves to, followed by '/**'):
  ```
  on:
  push:
    branches: [ "main" ]
    paths:
      - 'stibo-user/**'
  ```


### The Following Action Secrets and Variables must be Defined
Go to `Settings -> Secrets and Variables -> Actions`

#### Secrets:
- `REMOTE_HOST` - URL of the SFTP host AKA Host Name. For Stibo Systems SaaS environments, this is in the format of '[yourSystemName]-sftp.mdm.stibosystems.com'.
- `USERNAME` - User name that is used to connect to the remote host with priviledges to upload. For Stibo Systems SaaS environments, this is the DNS-1123 compliant Username configured in the Accounts area of the SFTP Access Control screen.
- `KEY` - SSH private key of user in Open SSH format, which is related to the public key configured on the SFTP Account of the Username on Stibo Systems SaaS environments.

The secrets above are used by the external action: https://github.com/wangyucode/sftp-upload-action and there is more information available about additional parameters. If desired, these can be applied only to job `SFTP uploader`.

#### Variables:
- `REPO_PATH` - the path below the Branch of the repository containing change packages, followed by a forward slash. In this example, `stibo-user/` (not including quotes) is the value for the Repository variable.
- `SFTP_PATH` - the path on the application server where the hotfolder on the IIEP is configured to receive files.  
