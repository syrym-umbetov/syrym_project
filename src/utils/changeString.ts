export default function changeString(string: string) {
  string = string.replace('/categories/', '');
  string = string.replace(/[/]/g, '_');
  if (string.includes('baby')) {
    if (string.includes('newborn')) {
      string = string.replace('newborn', 'new_born');
      string = string.replace('baby', 'kids');
    }
  } else {
    string = string.replace(/view/g, '');
  }
  if (string.includes('baby_girls')) {
    string = string.replace('baby_girls', 'kids_baby_girl');
  }
  if (string.includes('baby_boys')) {
    string = string.replace('baby_boys', 'kids_baby_boy');
  }
  string = string.replace(/[-]/g, '');
  if (string.includes('baby_shopbyproduct')) {
    string = string.replace('baby_shopbyproduct', 'kids_newbornbaby');
  }
  if (string.includes('fancydresscostumes')) {
    string = string.replace('fancydresscostumes', 'costumesfancydresses');
  }
  if (string.includes('baby_seasonaltrending_4thofjuly')) {
    string = string.replace(
      'baby_seasonaltrending_4thofjuly',
      'wk18_red_white_blue_baby'
    );
  }
  if (string.includes('baby_seasonaltrending_family')) {
    string = string.replace(
      'baby_seasonaltrending_family',
      'wk37_maternity_shop'
    );
  }
  if (string.includes('baby_seasonaltrending_bestsellers')) {
    string = string.replace(
      'baby_seasonaltrending_bestsellers',
      'wk1_baby_faves'
    );
  }
  if (string.includes('baby_seasonaltrending')) {
    string = string.replace('baby_seasonaltrending', 'kids_newbornbaby');
  }

  if (string.includes('baby_sustainability_ourproducts')) {
    string = string.replace(
      'baby_sustainability_ourproducts',
      'baby_sustainability'
    );
  }

  if (string.includes('giftguide')) {
    if (string.includes('_shopbyoccasion')) {
      string = string.replace('_shopbyoccasion', '');
    }
    if (string.includes('_shopbyinterest')) {
      string = string.replace('_shopbyinterest', '');
    }
    if (string.includes('newhomeowners')) {
      string = string.replace('newhomeowners', 'new_homeowners');
    }
    if (string.includes('gamespuzzles')) {
      string = string.replace('gamespuzzles', 'games_puzzle');
    }
    if (string.includes('techgadgets')) {
      string = string.replace('techgadgets', 'tech_gadget');
    }

    if (string.includes('the')) {
      string = string.replace('the', 'the_');
    }
    if (string.includes('plantlovers')) {
      string = string.replace('plantlovers', 'plantlover');
    }
    if (string.includes('music')) {
      string = string.replace('music', 'music_');
    }
    if (string.includes('yoga')) {
      string = string.replace('yoga', 'yoga_');
    }
    if (string.includes('giftideas_')) {
      string = string.replace('giftideas_', '');
    }
    if (string.includes('shopbyprice_')) {
      string = string.replace('giftguide_shopbyprice_', 'NA914_s4_');
      if (string.includes('price1')) {
        string = string.replace('price1', '5.99_L');
      }
      if (string.includes('price2')) {
        string = string.replace('price2', '14.99_L');
      }
      if (string.includes('price3')) {
        string = string.replace('price3', '24.99_L');
      }
    }
  }

  //LADIES START
  if (string.includes('ladies')) {
    if (string.includes('seasonaltrending_')) {
      string = string.replace('seasonaltrending_', '');
    }
    if (string.includes('shoesaccessories')) {
      string = string.replace('shoesaccessories', 'shoesacc');
    }
    if (string.includes('underwear')) {
      string = string.replace('underwear', 'underwear_');
    }
    if (string.includes('bodycollection')) {
      string = string.replace('ladies_bodycollection', 'NA733_s5_Curve');
    }
    if (string.includes('latesttrends')) {
      string = string.replace(
        'ladies_latesttrends',
        'ladies_divided_trending_now'
      );
    }
    if (string.includes('romance')) {
      string = string.replace('ladies_romance', 'ladies_romance');
    }
    if (string.includes('warmweather')) {
      string = string.replace(
        'ladies_warmweather',
        'ladies_warmweathervacation'
      );
    }
    if (string.includes('shopbyproduct_')) {
      string = string.replace('shopbyproduct_', '');
    }
    if (string.includes('and')) {
      string = string.replace('and', '');
    }
    if (string.includes('_ourproducts')) {
      string = string.replace('_ourproducts', '');
    }
    if (string.includes('party')) {
      string = string.replace('party', 'partywear');
    }
    if (string.includes('ladies_occasion_graduation')) {
      string = string.replace('ladies_occasion_graduation', 'NAL_LOCAL_GRAD');
    }
    if (string.includes('hm')) {
      string = string.replace('hm', '');
    }
    if (string.includes('maternitywear')) {
      string = string.replace('maternitywear', 'maternity');
    }
    if (string.includes('premiumselection')) {
      string = string.replace('premiumselection', 'premium_selection');
    }
  }
  if (string.includes('and')) {
    string = string.replace('and', '');
  }
  //LADIES END

  //DIVIDED START
  if (string.includes('divided')) {
    if (string.includes('newarrivals_')) {
      string = string.replace('newarrivals_', '');
    }
    if (string.includes('newarrivals_')) {
      string = string.replace('newarrivals_', '');
    }
    if (string.includes('shoesaccessories')) {
      string = string.replace('shoes', '');
    }
    string = string.replace('divided_', 'ladies_divided_');

    if (string.includes('ladies_divided_clothes')) {
      string = string.replace(
        'ladies_divided_clothes',
        'ladies_divided_new_clothes'
      );
    }
    if (string.includes('ladies_divided_accessories')) {
      string = string.replace(
        'ladies_divided_accessories',
        'ladies_divided_new_accessories'
      );
    }

    if (string.includes('dealalpha')) {
      string = string.replace('ladies_divided_deals_dealalpha', 'NA735_s5_SF');
    }

    if (string.includes('seasonaltrending_')) {
      string = string.replace('seasonaltrending_', '');
    }
    if (string.includes('shopbyproduct_')) {
      string = string.replace('shopbyproduct_', '');
      if (string.includes('_all')) {
        string = string.replace('_all', '');
      }
    }
    if (string.includes('leggings')) {
      string = string.replace('leggings', '');
    }
    if (string.includes('_dividedshorts')) {
      string = string.replace('_dividedshorts', '_shorts');
    }
    if (string.includes('_dividedswimwear')) {
      string = string.replace('_dividedswimwear', '_swimwear');
    }
    if (string.includes('_dividedunderwearnightwear')) {
      string = string.replace(
        '_dividedunderwearnightwear',
        '_underwearnightwear'
      );
    }
    if (string.includes('basics')) {
      string = string.replace('basics', 'basic');
    }
    if (string.includes('jacketsblazers')) {
      string = string.replace('blazers', 'coats');
    }
    if (string.includes('careproducts')) {
      string = string.replace('divided_careproducts', 'takecare');
    }
  }
  //DIVIDED END
  if (string.includes('_ourproducts')) {
    string = string.replace('_ourproducts', '');
  }
  if (string.includes('_shopbyproduct')) {
    string = string.replace('_shopbyproduct', '');
  }
  if (string.includes('hm')) {
    string = string.replace('hm', '');
  }
  //MEN START
  if (string.includes('men')) {
    if (string.includes('dealcharlie')) {
      string = string.replace('men_deals_dealcharlie', 'GLOBAL_SOCKS_342');
    }
    if (string.includes('_seasonaltrending')) {
      string = string.replace('_seasonaltrending', '');
    }
    if (string.includes('summer')) {
      string = string.replace('summer', 'summershop');
    }
    if (string.includes('linen')) {
      string = string.replace('linen', 'linenclothing');
    }
    if (string.includes('men_4thofjulyshop')) {
      string = string.replace('men_4thofjulyshop', '4th_of_july_M_all');
    }
    if (string.includes('swimwear')) {
      string = string.replace('swimwear', 'swimweear');
    }
    if (string.includes('men_4thofjulyshop')) {
      string = string.replace('men_4thofjulyshop', '4th_of_july_M_all');
    }
    if (string.includes('careproducts')) {
      string = string.replace('careproducts', 'takecare');
    }
    if (string.includes('premium')) {
      string = string.replace('premium', 'premium_');
    }
  }
  //MEN END
  if (string.includes('_seasonaltrending')) {
    string = string.replace('_seasonaltrending', '');
  }
  //KIDS START
  if (string.includes('kids')) {
    if (string.includes('kids_deals_onlineoffers')) {
      string = string.replace('kids_deals_onlineoffers', '4115F_Kids');
    }
    if (string.includes('character')) {
      string = string.replace('character', 'characters');
    }
    if (string.includes('4thofjuly')) {
      string = string.replace('kids_4thofjuly', 'wk18_red_white_blue_kids');
    }
    if (string.includes('all')) {
      string = string.replace('all', 'viewall');
    }
    if (string.includes('girls914y')) {
      string = string.replace('girls914y', 'oldergirls');
    }
    if (string.includes('boys914y')) {
      string = string.replace('boys914y', 'olderboys');
    }
    if (string.includes('costumesfancydresses')) {
      string = string.replace('costumesfancydresses', 'fancy_dress');
    }
  }
  // KIDS END

  //H&M HOME START

  if (string.includes('home')) {
    if (string.includes('textiles')) {
      string = string.replace('textiles', 'all');
    }
    if (string.includes('_shopbyroom')) {
      string = string.replace('_shopbyroom', '');
    }
    if (string.includes('servingdining')) {
      string = string.replace('servingdining', 'servingwaretableware');
    }
    if (string.includes('bathshower')) {
      string = string.replace('bathshower', 'bathshower_accessories');
    }
    if (string.includes('cookingbaking')) {
      string = string.replace('cookingbaking', 'cookwarebakeware');
    }
    if (string.includes('shopbyconcept_premiumselection')) {
      string = string.replace(
        'shopbyconcept_premiumselection',
        'premium_selection'
      );
    }
  }

  //H&M HOME END

  //OUTLET START
  if (string.includes('outlet')) {
    if (string.includes('outlet_ladies_clothes')) {
      string = string.replace(
        'outlet_ladies_clothes',
        'OUTLET_PL_LADIES_CLOTHES'
      );
    }
    if (string.includes('outlet_ladies_shoesacc')) {
      string = string.replace('outlet_ladies_shoesacc', 'OUTLET_PL_LADIES_ACC');
    }
    if (string.includes('outlet_men_clothes')) {
      string = string.replace('outlet_men_clothes', 'OUTLET_PLN_MEN');
    }
  }
  //OUTLET END
  return string;
}
