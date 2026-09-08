import { Pool } from 'pg'
import bcrypt from 'bcrypt'

const DATABASE_URL = 'postgres://avnadmin:AVNS_1CUGGH_-ABHGvZ2otdz@pg-contruc-los-castros-vmontoya-dbe7.d.aivencloud.com:16873/defaultdb?sslmode=require'
const NEW_PASSWORD = '190326'

async function run() {
  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  try {
    // Generar hash bcrypt de la nueva contraseña
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(NEW_PASSWORD, salt)

    console.log('✅ Hash generado correctamente')
    console.log('Salt:', salt)
    console.log('Hash:', hash)

    // Actualizar usuario Vmontoya en la BD
    const client = await pool.connect()
    
    // Primero averiguamos el ID del usuario Vmontoya
    const { rows: users } = await client.query(
      'SELECT id FROM users WHERE name = $1',
      ['Vmontoya']
    )
    
    if (users.length === 0) {
      console.error('❌ Usuario Vmontoya no encontrado')
      await pool.end()
      return
    }
    
    const userId = users[0].id
    console.log('🆔 ID del usuario:', userId)
    
    // Actualizar salt y hash
    await client.query(
      'UPDATE users SET salt = $1, hash = $2, updated_at = now() WHERE id = $3',
      [salt, hash, userId]
    )
    
    console.log('✅ Contraseña actualizada exitosamente en la base de datos')
    console.log('Usuario: Vmontoya')
    console.log('Nueva clave: 190326')
    
    await client.release()
    await pool.end()
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

run()