module.exports = {
    'type': 'postgres',
    'url': process.env.DB_URL,
    // 'url': 'postgres://postgres:postgrespw@localhost:55000',
    'entities': [process.env.ENTITY_PATH],
    'synchronize': false
}