db.createUser({
  user: "username",
  pwd: "password",
  roles: [
    { role: "readWrite", db: "mydatabase" },
    { role: "dbAdmin", db: "mydatabase" }
  ],
        db: "admin"
});
