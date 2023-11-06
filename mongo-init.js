db.createUser(
  {
    user: 'task_user',
    pwd: 'task_pw',
    roles: [
      {
        role: 'readWrite',
        db: 'task_db',
      },
    ],
  });
