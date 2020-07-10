// Definimos los datos estáticos que nuestra aplicación utilizará para funcionar.
// En una aplicación convencional estos datos provendrían desde un back-end pero a los fines de este ejercicio utilizaremos variables pre-definidas.
// Utilizamos fechas dinámicas para que la aplicación siempre muestre un rango de días entre la fecha actual y el futuro.

const today = new Date()
const hotelsData = [
  {
    slug: 'la-bamba-de-areco',
    name: 'La Bamba de Areco',
    photo: './images/la-bamba-de-areco.jpg',
    description: 'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: 'Buenos Aires',
    country: 'Argentina',
    lat:-34.2498325,
    lon:-59.4971244,
    price: 4
  },
  {
    slug: 'sainte-jeanne',
    name: 'Sainte Jeanne Boutique & Spa',
    photo: './images/sainte-jeanne.jpg',
    description: 'Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 23,
    city: 'Mar del Plata',
    country: 'Argentina',
    lat:-38.0172131,
    lon:-57.74062,
    price: 2
  },
  {
    slug: 'entre-cielos',
    name: 'Entre Cielos',
    photo: './images/entre-cielos.jpg',
    description: 'Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 16,
    city: 'Mendoza',
    country: 'Argentina',
    lat:-32.8832582,
    lon:-68.8935387,
    price: 4
  },
  {
    slug: 'huacalera',
    name: 'Hotel Huacalera',
    photo: './images/huacalera.jpg',
    description: 'Esta casona neocolonial, construida en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003.',
    availabilityFrom: today.valueOf() + 1728000000, // 20 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 32,
    city: 'Jujuy',
    country: 'Argentina',
    lat:-24.2051671,
    lon:-65.3755962,
    price: 1
  },
  {
    slug: 'merced-del-alto',
    name: 'La Merced del Alto',
    photo: './images/merced-del-alto.jpg',
    description: 'Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 14,
    city: 'Salta',
    country: 'Argentina',
    lat:-24.7959127,
    lon:-65.5006695,
    price: 2
  },
  {
    slug: 'azur-real',
    name: 'Azur Real Hotel',
    photo: './images/azur-real.jpg',
    description: 'La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.',
    availabilityFrom: today.valueOf() + 1296000000, // 15 days 
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 16,
    city: 'Córdoba',
    country: 'Argentina',
    lat:-31.399084,
    lon:-64.334431,
    price: 1
  },
  {
    slug: 'rincon-del-socorro',
    name: 'Rincón del Socorro',
    photo: './images/rincon-del-socorro.jpg',
    description: 'Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 11,
    city: 'Corrientes',
    country: 'Argentina',
    lat:-27.4860818,
    lon:-58.8624274,
    price: 2
  },
  {
    slug: 'luma-casa-de-montana',
    name: 'Luma Casa de Montaña',
    photo: './images/luma-casa-de-montana.jpg',
    description: 'Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 8,
    city: 'Villa La Angostura',
    country: 'Argentina',
    lat:-40.7632679,
    lon:-71.6504163,
    price: 2
  },
  {
    slug: 'casa-turquesa',
    name: 'Casa Turquesa',
    photo: './images/casa-turquesa.jpg',
    description: 'Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 9,
    city: 'Río de Janeiro',
    country: 'Brasil',
    lat:-22.0597003,
    lon:-44.0445117,
    price: 3
  },
  {
    slug: 'vila-da-santa',
    name: 'Vila Da Santa',
    photo: './images/vila-da-santa.jpg',
    description: 'Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su espíritu original. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 19,
    city: 'Buzios',
    country: 'Brasil',
    lat:-22.7614778,
    lon:-41.9533836,
    price: 3
  },
  {
    slug: 'uxua-casa',
    name: 'UXUA Casa Hotel & Spa',
    photo: './images/uxua-casa.jpg',
    description: 'UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: 'Bahía',
    country: 'Brasil',
    lat:-13.3837623,
    lon:-46.482426,
    price: 4
  },
  {
    slug: 'ponta-dos-ganchos',
    name: 'Ponta dos Ganchos',
    photo: './images/uxua-casa.jpg',
    description: 'Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, en una península privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 25,
    city: 'Santa Catarina',
    country: 'Brasil',
    lat:-27.6307535,
    lon:-53.3272919,
    price: 4
  },
  {
    slug: 'alto-atacama',
    name: 'Alto Atacama',
    photo: './images/alto-atacama.jpg',
    description: 'Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 42,
    city: 'San Pedro de Atacama',
    country: 'Chile',
    lat:-22.9139737,
    lon:-68.2161743,
    price: 4
  },
  {
    slug: 'tierra-patagonia',
    name: 'Tierra Patagonia',
    photo: './images/tierra-patagonia.jpg',
    description: 'Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.',
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    rooms: 40,
    city: 'Torres del Paine',
    country: 'Chile',
    lat:-51.2591527,
    lon:-72.3537548,
    price: 4
  },
  {
    slug: 'vira-vira',
    name: 'Vira Vira',
    photo: './images/vira-vira.jpg',
    description: 'Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 21,
    city: 'Pucón',
    country: 'Chile',
    lat:-39.2803931,
    lon:-71.9766899,
    price: 4
  },
  {
    slug: 'vik-chile',
    name: 'Vik Chile',
    photo: './images/vik-chile.jpg',
    description: 'Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 22,
    city: 'Millahue',
    country: 'Chile',
    lat:-34.5243405,
    lon:-71.2199254,
    price: 4
  },
  {
    slug: 'casa-higueras',
    name: 'Casa Higueras',
    photo: './images/casa-higueras.jpg',
    description: 'Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 20,
    city: 'Valparaíso',
    country: 'Chile',
    lat:-33.050631,
    lon:-71.6460682,
    price: 4
  },
  {
    slug: 'campo-tinto',
    name: 'Campo Tinto',
    photo: './images/campo-tinto.jpg',
    description: 'Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.',
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 4,
    city: 'Colonia',
    country: 'Uruguay',
    lat:-34.118456,
    lon:-58.262276,
    price: 1
  }
]

export default hotelsData;
