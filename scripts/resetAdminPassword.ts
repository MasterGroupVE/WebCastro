// Script temporal para resetear la contraseña del admin.
// Se ejecuta con: payload run scripts/resetAdminPassword.ts
// Una vez reseteada, BORRAR este archivo.

import { getPayload } from 'payload'
import config from '../src/payload.config'

export default async function resetAdminPassword() {
  const payload = await getPayload({ config })

  // 1. Listar todos los usuarios
  const users = await payload.find({
    collection: 'users',
    limit: 50,
    depth: 0,
  })

  console.log('\n=== USUARIOS EXISTENTES ===')
  users.docs.forEach((u: any) => {
    console.log(`  ID: ${u.id} | Email: ${u.email} | Name: ${u.name}`)
  })

  if (users.docs.length === 0) {
    console.log('\nNo hay usuarios. Creando admin nuevo...')
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@construccionesloscastros.com',
        password: 'CastroAdmin2026!',
        name: 'Admin',
      },
    })
    console.log('Admin creado: admin@construccionesloscastros.com / CastroAdmin2026!')
    return
  }

  // 2. Resetear el primer usuario (el admin)
  const admin = users.docs[0] as any
  const newPassword = 'CastroAdmin2026!'

  console.log(`\nReseteando contraseña para: ${admin.email}`)
  console.log(`Nueva contraseña temporal: ${newPassword}`)

  await payload.update({
    collection: 'users',
    id: admin.id,
    data: {
      password: newPassword,
    },
  })

  console.log('\n=== CONTRASEÑA RESETEADA ===')
  console.log(`Email: ${admin.email}`)
  console.log(`Password: ${newPassword}`)
  console.log('\nEntra a http://localhost:3100/admin/login y cámbiala luego.')
}

resetAdminPassword()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Error:', err)
    process.exit(1)
  })
