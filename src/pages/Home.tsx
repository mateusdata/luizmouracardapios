import React, { useState } from 'react';
import GlobalLayout from '../layouts/GlobalLayout';
import TabPane from 'antd/es/tabs/TabPane';
import { Tabs } from 'antd';
const menuItems = {

  "Cervejas": [
    { name: "Cerveja s/ Alcool Lata", image: "https://s2.glbimg.com/wlynLsEgEltwM4WRaxttAlSxDd0=/e.glbimg.com/og/ed/f/original/2021/08/18/lr_mkp_6pk_skol_puro_malte_350_v1_f3_1.jpg", price: "R$ 7,00" },
    { name: "Nevada Limão", image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1f1e7727435dd65cec7efea45805c4cc.jpg", price: "R$ 8,00" },
    { name: "Nevada Morango", image: "https://mestredosdrinks.com/wp-content/uploads/2022/01/Nevada-Drink-de-Limao-e-Morango-com-Leite-Condensado-Uma-Combinacao-Celestial.jpg", price: "R$ 18,00" },
    { name: "Nevada Outras", image: "https://i.pinimg.com/474x/8f/fc/42/8ffc427fa3681dff7d3ec3f6a2cfe502.jpg", price: "R$ 18,00" },
    { name: "Cerveja Malzbier Lata", image: "https://mercantilatacado.vtexassets.com/arquivos/ids/168367/65382cf8d3712b6537c7111e.jpg?v=638337771567000000", price: "R$ 8,00" },
    { name: "Stella Artois 550mL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 18,00" },
    { name: "Vinho Rosca", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Vinho Taça", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 12,00" },
    { name: "Vinho Seco Garrafa 750ml", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 35,00" },
    { name: "Vinho Litre", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Vinho Jarra 750ml", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 16,00" },
    { name: "Reserva 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Aperol", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 12,00" },
    { name: "Cabare Ouro", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Cabare Prata", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Salinas Prata", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 7,00" },
    { name: "Salinas Ouro", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 7,00" },
    { name: "51 Gold", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Pitu Gold", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 13,00" },
    { name: "Jangada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 5,00" },
    { name: "Para Tudo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 5,00" },
    { name: "Gim Tanqueray", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 18,00" },
    { name: "Ice Cabaré Frutas Vermelhas e Limão", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 11,00" },
    { name: "Espumante Garrafa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 35,00" },
    { name: "Eisenbahn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" },
    { name: "Coca KS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 5,00" },
    { name: "Bohemia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRv_CRs5QfqqADameCxZhA2KeL2tmRVmYmPeHbNL8gQ&s", price: "R$ 10,00" }
  ],

  "Caipiroskas": [
    { name: "Caipiroska Limão", image: "https://static.itdg.com.br/images/auto-auto/2d224fd26d60d7fed7144ee142ad53f4/caipiroska-perfeita.png", price: "R$ 17,00" },
    { name: "Calpiroska de Kiwi", image:"https://static.itdg.com.br/images/auto-auto/2d224fd26d60d7fed7144ee142ad53f4/caipiroska-perfeita.png", price: "R$ 17,00" },
    { name: "Caipiroska Morango", image: "https://static.itdg.com.br/images/auto-auto/2d224fd26d60d7fed7144ee142ad53f4/caipiroska-perfeita.png", price: "R$ 17,00" }
  ],
  "Bebidas não Alcolicas": [
    { name: "Refrigerante Lata", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 5,00" },
    { name: "Refrigerante Litro", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 8,00" },
    { name: "Água / Gás", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 3,00" },
    { name: "Água c/ Gás", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 3,50" },
    { name: "Água de Coco", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Aquarius Fresh", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 5,50" },
    { name: "H2O Aquarius", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 5,50" },
    { name: "Suco de Acerola", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco de Goiaba", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco de Laranja", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco de Abacaxi", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco de Umbu", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco de Caja", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco de Caju", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco Limão", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco Maracuja", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 10,00" },
    { name: "Suco Copo", image: "https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682", price: "R$ 5,00" }
  ],
  "Sobremesas": [
    { name: "Halls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Prestigio", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Chokito", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Galak", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Laka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 5,00" },
    { name: "Jujuba", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Bala-unid.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 0,25" },
    { name: "Trident", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 2,50" },
    { name: "Baton", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Serenata", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 1,00" },
    { name: "Pirulito Pop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 0,50" },
    { name: "Amendupa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 3,00" },
    { name: "Fósforo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo9tmZGlXy1iBtH04ZetNBSqJ0fI3b1KnW6T71tJkyQ&s", price: "R$ 1,00" }
  ],

  "Cigarros": [
    { name: "Carteira de Cigarro", image: "https://cdn.awsli.com.br/2500x2500/2475/2475668/produto/171806061/4ea79ab4ce.jpg", price: "R$ 14,00" },
    { name: "Cigarro Unidade", image: "https://cdn.awsli.com.br/2500x2500/2475/2475668/produto/171806061/4ea79ab4ce.jpg", price: "R$ 2,00" }
  ]

};
const MenuPage = () => {
  const [openCategory, setOpenCategory] = useState<any>(0);
  return (
    <GlobalLayout>
      <h1 className="text-3xl px-5 pt-2 text-center font-bold mb-4" style={{ color: "#407AFF" }}>No Trabalho Drinks</h1>

      <Tabs className='px-2 ' defaultActiveKey="0">

        {Object.entries(menuItems).map(([category, items], index) => (
          <TabPane tab={category} key={index.toString()}>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-100 flex justify-between p-4 border rounded-md">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                  <div>
                    <img src={item.image} alt={item.name} className="w-28 h-20 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        ))}
      </Tabs>
    </GlobalLayout>
  );
};

export default MenuPage;