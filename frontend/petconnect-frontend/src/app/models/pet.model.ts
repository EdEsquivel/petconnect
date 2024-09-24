export interface Pet {
    id: number; // Incluido ya que Django genera IDs automáticamente.
    name: string;
    species: 'dog' | 'cat'; // Usando tipos literales para las opciones.
    breed: string;
    gender: 'male' | 'female';
    age: number;
    size: 'small' | 'medium' | 'large';
    description: string; // Opcional, ya que podría estar vacío en Django.
    image: string; // Para acceder a la URL en Django.
    status: 'available' | 'adopted';
    ownerId: number; // Referencia al ID del usuario propietario.
  }