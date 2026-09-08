import { payload } from './payload.config';

try {
  await payload.create({
    collection: 'users',
    data: {
      name: 'Vmontoya',
      password: '190326',
    },
  });
  console.log('✅ Contraseña actualizada exitosamente para usuario Vmontoya');
  console.log('La nueva clave es: 190326');
} catch (error) {
  console.error('❌ Error al actualizar contraseña:', error);
}