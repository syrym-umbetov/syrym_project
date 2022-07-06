export const productsOptions = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
  params: {
    country: 'us',
    lang: 'en',
    currentpage: '1',
    pagesize: '50',
  },
  headers: {
    'X-RapidAPI-Key': '964cd5e2a6msh496f722349b2e54p1092a3jsna97717d0d003',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
};
// 897b864698mshd9566898364e02dp11e5e2jsn05a7bf77f30a umbetov.syrym@gmail.com
// dd271d5254msh0b946f207ab2034p122509jsn31bcb8cc14fd umbetov.syrym1995@gmail.com
// fbd5f66d85mshb391513bdb9e14bp1b5078jsn97a8a65b1696 kruto.pridumal7@gmail.
// 1ece433639msh0196eef10502559p11bacbjsnd54d89972758 macaronsdebasilique@gmail.com
// bdb0866f4bmsh5d35d0cd76ba974p1d6a09jsnc965dfdab82c umbetov.syrym1@gmail.com
// 6de52cd3d3mshc5202b511c319b4p19ac47jsn895f4200a122 umbetov.syrym2@gmail.com
// b26c896b3fmsh90de9d8371252c3p15b244jsna03ca67d99ba umbetov.syrym3@gmail.com
// 55bbb753c7mshb0867e87ea997e6p19cc82jsncb28a2b67024 umbetov.syrym4@gmail.com
// 5fa8a2da80msh7b3e9992d83d2dfp10ce4djsn8c8c27199389 umbetov.syrym5@gmail.com
// c16a18e36cmsh15c7b1d2db2fcdcp1fda29jsn2648c99b65ca DoctorDulittle@yandex.ru
// bf3502492dmsh61dd5bf7c257794p1ab8b8jsnc316c9a49a82 syrymumbetov@yandex.kz
// 1ad1dd7f40mshbf5b9005b9bf608p14e60djsn82870f1e3b57 umbetov.syrym@yandex.kz
// b32eb43a76msh027c61529c7d35ap1f27bdjsn75558f4a0f9f umbetovsyrym@yandex.kz
// 964cd5e2a6msh496f722349b2e54p1092a3jsna97717d0d003 umbetov.syrymumbetov@yandex.kz

export const detailOptions = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
  params: { lang: 'en', productcode: '0839915011', country: 'us' },
  headers: {
    'X-RapidAPI-Key': '964cd5e2a6msh496f722349b2e54p1092a3jsna97717d0d003',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
};

export const categoriesOptions = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
  params: { lang: 'en', country: 'us' },
  headers: {
    'X-RapidAPI-Key': '964cd5e2a6msh496f722349b2e54p1092a3jsna97717d0d003',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
};

export const fetchData = async <T = any>(url: string, options: {}) => {
  const response = await fetch(url, options);
  const data: T = await response.json();

  return data;
};
