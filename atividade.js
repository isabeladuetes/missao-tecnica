let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

// Atividade 1 

// Removendo a último item duplicado do array
let inventarioRemovido = inventarioAlpha.pop();

console.log(inventarioAlpha);
console.log("Item duplicado removido:", inventarioRemovido);

// Atividade 2

// Removendo a último artefato obsoleto do array
let inventarioBetaRemovido = inventarioBeta.pop();

console.log(inventarioBeta);
console.log("Item duplicado removido:", inventarioBetaRemovido);

// Atividade 3

// Adicionando um novos artefatos no inventário Alpha
inventarioAlpha.push (["Satelite", "Plutão", 20300],["GPS", "Saturno", 46300],["Telescópio de luz", "Terra", 202500]);

console.log("Novos artefatos Alphas adicionados:");
console.table(inventarioAlpha);

// Atividade 4

// Adicionando um novos artefatos no inventário Beta
inventarioBeta.push (["Buraco negro", "Plutão", 20300],["Câmera", "Vênus", 96300],["Telescópio", "Marte", 202600]);

console.log("Novos artefatos Betas adicionados:");
console.table(inventarioBeta);

// Atividade 5

// Adicionando um novo item ao topo de inventário Alpha
let itemNoTopo = inventarioAlpha[3];
inventarioAlpha.unshift(itemNoTopo);

// Removendo 1 item a partir do índice 4
inventarioAlpha.splice(4, 1);
console.table(inventarioAlpha);

// Atividade 6

// Adicionando um novo item ao topo do inventário Beta
let itemDestacado = inventarioBeta[4];
inventarioBeta.unshift(itemDestacado);

// Removendo 1 item a partir do índice 5
inventarioBeta.splice(5, 1);
console.table(inventarioBeta);

// Atividade 7

// Removendo o primeiro item Alpha
let itemRemovido = inventarioAlpha.shift();

console.table(inventarioAlpha);
console.log("Item do topo removido:", itemRemovido);

// Atividade 8

// Removendo o primeiro item Beta
let elementoRemovido = inventarioBeta.shift();

console.table(inventarioBeta);
console.log("Item do topo removido:", elementoRemovido);

// Atividade 9

// Verificando se a “Relíquia de Zordon” está presente no inventário Beta
console.log(`A lista inclui 'Relíquia de Zordon'? ${inventarioBeta.includes("Relíquia de Zordon")}`);

// Atividade 10

// Verificando se o item “Nanofibra Luminosa” ainda está disponível na Alpha.
console.log(`A lista inclui 'Nanofibra Luminosa'? ${inventarioAlpha.includes("Nanofibra Luminosa")}`);

// Atividade 11

console.log("Planetas do inventário Alpha separados por string:", inventarioAlpha.join(', ')); 

// Atividade 12

// Separando os 10 primeiros itens da Beta e colocando vírgulas
console.log("Os 10 primeiros itens da Beta, separados por vírgulas:", inventarioBeta.slice(0, 10).join(", "));

// Atividade 13

// Separando os 5 primeiros itens da Beta
console.log("Lista com os 5 primeiros itens da nave Beta para inspeção (índices 0 a 5):", inventarioBeta.slice(0, 5)); 

// Atividade 14

// Separando os 10 últimos itens da Alpha
console.log("Lista com os 10 últimos itens do inventário Alpha para estudo temporal (índices 15 a 25):", inventarioAlpha.slice(15, 25)); 

// Atividade 15

// Substituindo o elementos 5
inventarioAlpha[5] = ['Relógio espacial', 'Urano', 21098];
console.log("Quinto item da Alpha substituído:");
console.table(inventarioAlpha);

// Atividade 16

// Removendo 2 elementos a partir do índice 2
let elementosRemovidos = inventarioBeta.splice(2, 2);

console.log("Dois itens no meio do inventário Beta removidos:");
console.table(inventarioBeta);

console.log("Elementos removidos:", elementosRemovidos);

// Atividade 17 

// Unificando os dois invetários (Alpha e Beta)
console.log("Os dois inventários juntos:", inventarioAlpha.concat(inventarioBeta));

// Atividade 18

// Colocando os cinco primeiros itens de cada nave em uma nova vitrine
let inventarioBetaDestaque=  inventarioBeta.slice(0, 5);
let inventarioAlphaDestaque =  inventarioAlpha.slice(0, 5);
let inventariosJuntos = inventarioBetaDestaque.concat(inventarioAlphaDestaque);

console.table(inventariosJuntos);

// Atividade 19

let inventarioBetaEmCaps = inventarioBeta.map(itens => itens.toUpperCase());

console.log("O s itens do inventário Beta em letras maiúsculas:", inventarioBetaEmCaps);