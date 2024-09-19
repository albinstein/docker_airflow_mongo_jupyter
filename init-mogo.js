db.getSiblingDB('admin').updateUser('root', {
  roles: [
    { role: 'readWriteAnyDatabase', db: 'admin' },
    { role: 'clusterAdmin', db: 'admin' },
    { role: 'dbAdminAnyDatabase', db: 'admin' },
    { role: 'userAdminAnyDatabase', db: 'admin' }
  ]
});