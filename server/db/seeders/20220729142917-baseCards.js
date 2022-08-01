// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('Cards', [{
//       name: 'Alya',
//       photo_url: 'https://avatars.githubusercontent.com/u/70153830?v=4',
//       description: '',
//       damage: '2',
//       health: '2',
//       manaCost: '1',
//       // Восстанавливает 4 хп каждому герою
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Polyasha',
//       photo_url: 'https://avatars.githubusercontent.com/u/83905654?v=4',
//       description: '',
//       damage: '2',
//       health: '1',
//       manaCost: '1',
//       // чардж
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Pasha',
//       photo_url: 'https://avatars.githubusercontent.com/u/58050328?v=4',
//       description: '',
//       damage: '1',
//       health: '1',
//       manaCost: '1',
//       // Баттл-край стреляет в цель с 1хп
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Pasha-stealth',
//       photo_url: 'https://avatars.githubusercontent.com/u/62694399?v=4',
//       description: '',
//       damage: '2',
//       health: '1',
//       manaCost: '1',
//       // стелз
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Artem',
//       photo_url: 'https://avatars.githubusercontent.com/u/103851997?v=4',
//       description: '',
//       damage: '0',
//       health: '4',
//       manaCost: '1',
//       // таунт
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Damir',
//       photo_url: 'https://avatars.githubusercontent.com/u/103841724?v=4',
//       description: '',
//       damage: '1',
//       health: '2',
//       manaCost: '1',
//       // смертельный крик = -2 хп герою
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Katya',
//       photo_url: 'https://avatars.githubusercontent.com/u/24404274?v=4',
//       description: '',
//       damage: '2',
//       health: '1',
//       manaCost: '2',
//       // чардж
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Adam',
//       photo_url: 'https://avatars.githubusercontent.com/u/104528762?v=4',
//       description: '',
//       damage: '2',
//       health: '2',
//       manaCost: '2',
//       // таунт
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Maksimilian',
//       photo_url: 'https://avatars.githubusercontent.com/u/105493972?v=4',
//       description: '',
//       damage: '2',
//       health: '4',
//       manaCost: '2',
//       // наносит 3 урона твоему герою
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Nikita',
//       photo_url: 'https://avatars.githubusercontent.com/u/95707595?v=4',
//       description: '',
//       damage: '2',
//       health: '1',
//       manaCost: '2',
//       // яд
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Ilona',
//       photo_url: 'https://avatars.githubusercontent.com/u/60158536?v=4',
//       description: '',
//       damage: '2',
//       health: '3',
//       manaCost: '2',
//       // стелз
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Ira',
//       photo_url: 'https://avatars.githubusercontent.com/u/102436907?v=4',
//       description: '',
//       damage: '2',
//       health: '1',
//       manaCost: '2',
//       // battlecry: наносит 1 урона
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Ulyana',
//       photo_url: 'https://avatars.githubusercontent.com/u/105513332?v=4',
//       description: '',
//       damage: '2',
//       health: '3',
//       manaCost: '3',
//       // яд
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Kadj',
//       photo_url: 'https://avatars.githubusercontent.com/u/103612926?v=4',
//       description: '',
//       damage: '4',
//       health: '2',
//       manaCost: '3',
//       // стелз
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Igor intensive',
//       photo_url: 'https://avatars.githubusercontent.com/u/71008727?v=4',
//       description: '',
//       damage: '3',
//       health: '3',
//       manaCost: '3',
//       // таунт
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Nadya',
//       photo_url: 'https://avatars.githubusercontent.com/u/57523726?v=4',
//       description: '',
//       damage: '3',
//       health: '1',
//       manaCost: '3',
//       // чардж
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'LEHA',
//       photo_url: 'https://avatars.githubusercontent.com/u/6486384?v=4',
//       description: '',
//       damage: '3',
//       health: '3',
//       manaCost: '3',
//       // наносит 2 единицы урона герою противника
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Liubov',
//       photo_url: 'https://avatars.githubusercontent.com/u/69152815?v=4',
//       description: '',
//       damage: '3',
//       health: '5',
//       manaCost: '3',
//       // наносит 4 единицы урона своему герою
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Movsar',
//       photo_url: 'https://avatars.githubusercontent.com/u/66189993?v=4',
//       description: '',
//       damage: '3',
//       health: '3',
//       manaCost: '4',
//       // наносит 3 единицы урона чужому герою
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Kolya',
//       photo_url: 'https://avatars.githubusercontent.com/u/48212109?v=4',
//       description: '',
//       damage: '5',
//       health: '4',
//       manaCost: '4',
//       // таунт
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: 'Kolya',
//       photo_url: 'https://avatars.githubusercontent.com/u/48212109?v=4',
//       description: '',
//       damage: '5',
//       health: '4',
//       manaCost: '4',
//       // таунт
//       ability_id: null,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     ]);
//   },
//
//   async down(queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   },
// };
