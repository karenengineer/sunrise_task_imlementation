module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    allowNull: false,
  }, {});
  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    },
      Todo.belongsTo(models.User, {
        foreignKey: 'todoId',
        onDelete: 'CASCADE',
      }));
  };
  return Todo;
};
