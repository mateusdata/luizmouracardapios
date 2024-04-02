import React, { useState } from 'react';

const menuItems = {
  "Caipiroskas": [
    { name: "Caipiroska Limão", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 17,00" },
    { name: "Calpiroska de Kiwi", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 17,00" },
    { name: "Caipiroska Morango", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 17,00" }
  ],
  "Cervejas": [
    { name: "Cerveja s/ Alcool Lata", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 7,00" },
    { name: "Nevada Limão", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 8,00" },
    { name: "Nevada Morango", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 18,00" },
    { name: "Nevada Outras", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 18,00" },
    { name: "Cerveja Malzbier Lata", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 8,00" },
    { name: "Stella Artois 550mL", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 18,00" },
    { name: "Vinho Rosca", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Vinho Taça", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 12,00" },
    { name: "Vinho Seco Garrafa 750ml", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 35,00" },
    { name: "Vinho Litre", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Vinho Jarra 750ml", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 16,00" },
    { name: "Reserva 5", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Aperol", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 12,00" },
    { name: "Cabare Ouro", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Cabare Prata", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Salinas Prata", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 7,00" },
    { name: "Salinas Ouro", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 7,00" },
    { name: "51 Gold", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Pitu Gold", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 13,00" },
    { name: "Jangada", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,00" },
    { name: "Para Tudo", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,00" },
    { name: "Gim Tanqueray", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 18,00" },
    { name: "Ice Cabaré Frutas Vermelhas e Limão", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 11,00" },
    { name: "Espumante Garrafa", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 35,00" },
    { name: "Eisenbahn", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Coca KS", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,00" },
    { name: "Bohemia", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" }
  ],
  "Bebidas não Alcolicas": [
    { name: "Refrigerante Lata", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,00" },
    { name: "Refrigerante Litro", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 8,00" },
    { name: "Água / Gás", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Água c/ Gás", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,50" },
    { name: "Água de Coco", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Aquarius Fresh", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,50" },
    { name: "H2O Aquarius", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,50" },
    { name: "Suco de Acerola", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco de Goiaba", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco de Laranja", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco de Abacaxi", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco de Umbu", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco de Caja", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco de Caju", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco Limão", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco Maracuja", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 10,00" },
    { name: "Suco Copo", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,00" }
  ],
  "Sobremesas": [
    { name: "Halls", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Prestigio", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Chokito", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Galak", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Laka", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 5,00" },
    { name: "Jujuba", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Bala-unid.", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 0,25" },
    { name: "Trident", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 2,50" },
    { name: "Baton", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Serenata", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 1,00" },
    { name: "Pirulito Pop", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 0,50" },
    { name: "Amendupa", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 3,00" },
    { name: "Fósforo", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 1,00" }
  ],
  "Cigarros": [
    { name: "Carteira de Cigarro", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 14,00" },
    { name: "Cigarro Unidade", image:"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg", price: "R$ 2,00" }
  ]
};

const MenuPage = () => {
  const [openCategory, setOpenCategory] = useState<any>(0);

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
       <h1 className="text-3xl font-bold mb-4" style={{ color: "#407AFF" }}>No Trabalho Drinks</h1>
      <p className="mb-4">"O Senhor é o meu pastor e nada me faltará."</p>
      {Object.entries(menuItems).map(([category, items], index) => (
        <div key={index} className="mb-8">
          <button
            className="text-xl font-bold mb-4"
            style={{ color: "#407AFF", cursor: "pointer" }}
            onClick={() => setOpenCategory(openCategory === index ? null : index)}
          >
            {category} {openCategory === index ? "-" : "+"}
          </button>
          {openCategory === index && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-100 p-4 rounded-md">
                  <img src={"https://img.freepik.com/fotos-gratis/hamburguer-grelhado-e-batatas-fritas-ia-geradora-de-alimentos_188544-8516.jpg"} alt={item.name} className="w-full h-auto rounded-md" />
                  
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuPage;