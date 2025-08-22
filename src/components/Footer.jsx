import "../styles/global.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import appimg from "../assets/app-img.png";
import original from "../assets/original.png";
import fourteendays from "../assets/14days.png";


function Footer(){
    return(
<div>
        {/* <!-- Footer  --> */}
  <footer className="text-white pt-5 pb-4  footer">
    <div className="container">
      <div className="row gy-4">
        {/* <!-- Quick Links  --> */}
        <div className="col-md-3">
          <h6 className="fw-bold">Online shopping</h6>
          <ul className="list-unstyled mt-3">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Genz</a></li>
            <li><a href="#">Gift Card</a></li>
            <li><a href="#">Myntra insider</a></li>
          </ul>

          <h6 className="fw-bold">Useful Links</h6>
          <ul className="list-unstyled mt-3">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Whitehat</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Myntra Global</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className="fw-bold">Customer Policies</h6>
          <ul className="list-unstyled mt-3">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Track Orders</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Returns</a></li>
            <li><a hrfe="#">Privacy Policy</a></li>
            <li><a href="#">Grievance Redressal</a></li>
          </ul>
        </div>
        {/* <!-- Contact  --> */}
        <div className="col-md-3">
          <h6 className="fw-bold">Experience with app or mobile</h6>
          <ul className="list-unstyled mt-3 small">
            <li><img src={appimg} className="app-image"></img></li>
          </ul>
          <div className="keeptouch">
            <h6 className="fw-bold">Keep in touch</h6>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>

         {/* Column 4 (Guarantee Section) */}
  <div className="col-md-3">
    <div className="d-flex flex-column gap-3 guarantee">
      <div className="d-flex align-items-center gap-2">
        <img src={original} alt="100% original" />
        <p>
          <b>100% ORIGINAL</b> guarantee for all products at myntra.com
        </p>
      </div>
      <div className="d-flex align-items-center gap-2">
        <img src={fourteendays} alt="14 days return" />
        <p>
          <b>Return within 14 days</b> of receiving your order
        </p>
      </div>
    </div>
  </div>
</div>
      <div className="row gy-4">
       <div className="popular-searches">
      <h6>Popular Searches</h6>
      <p>
        <a href="#">Makeup</a> | <a href="#">Dresses for girls</a> | <a href="#">T-Shirts</a> | <a href="#">Sandals</a> | <a href="#">Headphones</a> | <a href="#">Babydolls </a>| 
       <a href="#"> Blazers for men </a>| <a href="#">Handbags</a> | <a href="#">Ladies Watches</a> | <a href="#">Bags</a> | <a href="#">Sports Shoes</a> | <a href="#">Reebok Shoes</a> | 
       <a href="#"> Puma Shoes</a> | <a href="#">Boxers</a>| <a href="#">Wallets</a> |<a href="#"> Tops</a> |<a href="#"> Earrings</a> | <a href="#">Fastrack Watches</a> |<a href="#"> Kurtis</a> | 
       <a href="#"> Nike</a> | <a href="#">Smart Watches</a> | <a href="#">Titan Watches</a> |<a href="#"> Designer Blouses</a> | <a href="#">Gowns</a> | <a href="#">Rings</a> | 
        <a href="#">Cricket Shoes</a> |<a href="#"> Forever 21</a> |<a href="#"> Eye Makeup</a> |<a href="#"> Photo Frames</a> | <a href="#">Punjabi Suits</a> | 
        <a href="#">Bikinis</a>|<a href="#"> Myntra Fashion Show</a> |<a href="#"> Lipstick</a> |<a href="#"> Saree</a> |<a href="#"> Watches</a> | <a href="#">Dresses</a> | 
        <a href="#">Lehenga</a> | <a href="#">Nike Shoes</a> | <a href="#">Goggles</a> | <a href="#">Bras</a> |<a href="#"> Suits</a> |<a href="#"> Chinos</a> |<a href="#"> Shoes</a> | <a href="#">Adidas Shoes</a> | 
        <a href="#">Woodland Shoes</a> | <a href="#">Jewellery</a> |<a href="#"> Designer Shoes</a>
      </p>
    </div>
    </div>

     <div className="row gy-4 align-items-center footer-bottom">
  {/* Left */}
  <div className="col-4 text-start medium">
    <p className="mb-0">In case of any concern, <a href="#">Contact Us</a></p>
  </div>

  {/* Center */}
  <div className="col-4 text-center medium">
    <p className="mb-0">© 2025 www.myntra.com. All rights reserved.</p>
  </div>

  {/* Right */}
  <div className="col-4 text-end medium">
    <p className="mb-0">A Flipkart company</p>
  </div>
</div>
<hr style={{ borderColor: "#9d9d9eff", margin: "2" }} />


<div className="row office-row">
  {/* Address - Left */}
  <div className="col-md-9 office-address">
    <h5>Registered Office Address</h5>
    <ul className="list-unstyled small">
      <li>Buildings Alyssa,</li>
      <li>Begonia and Clover situated in Embassy Tech Village,</li>
      <li>Outer Ring Road,</li>
      <li>Devarabeesanahalli Village,</li>
      <li>Varthur Hobli,</li>
      <li>Bengaluru – 560103, India</li>
    </ul>
  </div>

  {/* CIN + Telephone - Right */}
  <div className="col-md-3 phone text-end">
    <p className="small">CIN: U72300KA2007PTC041799</p>
    <p className="small">Telephone:<a href="#"> +91-80-61561999</a></p>
  </div>
</div>

<hr style={{ borderColor: "#b3b3b3", margin: "2px 0" }} />


<div className="row gy-4 shopping-section">
  <hr />

  {/* Section 1 */}
  <h6 className="section-heading">ONLINE SHOPPING MADE EASY AT MYNTRA</h6>
  <p className="section-text">
    If you would like to experience the best of online shopping for men, women and kids in India, 
    you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being 
    host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal 
    care products and more. It is time to redefine your style statement with our treasure-trove of 
    trendy items. Our online store brings you the latest in designer products straight out of fashion 
    houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered 
    right to your doorstep.
  </p>

  {/* Section 2 */}
  <h6 className="section-heading">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h6>
  <p className="section-text">
    Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and 
    functionality for men, women and kids. You will realise that the sky is the limit when it comes 
    to the types of outfits that you can purchase for different occasions.
  </p>

  {/* List */}
  <ol className="shopping-list">
    <li>
      <b>Smart men’s clothing - </b>
      <span>
        At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, 
        or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the 
        back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane 
        style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers 
        for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather 
        with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments 
        which would keep you confident in any outfit.
      </span>
    </li>

    <li>
      <b>Smart women’s clothing - </b>
      <span>
        <a href="#">Online shopping for women</a> at Myntra is a mood-elevating experience. Look hip and stay 
        comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black 
        dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit 
        of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, 
        embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. 
        Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and 
        lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our 
        salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
      </span>
    </li>

    <li>
      <b>Fashionable footwear - </b>
      <span>
        While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an 
        exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power 
        statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men 
        and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step 
        into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of 
        fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy 
        the best of comfort and style with embellished and metallic flats.
      </span>
    </li>

    <li>
      <b>Stylish accessories - </b>
      <span>
        Myntra is one of the best online shopping sites for classy accessories that perfectly complement your 
        outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick 
        up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal 
        jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.
      </span>
    </li>

    <li>
      <b>Fun and frolic - </b>
      <span>
        Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide 
        variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports 
        shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup 
        of toys with which you can create memories to cherish.
      </span>
    </li>

    <li>
      <b>Beauty begins here - </b>
      <span>
        You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming 
        products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products 
        are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep 
        your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to 
        enhance your natural beauty.
      </span>
    </li>
  </ol>

  {/* Closing text */}
  <p className="section-text">
    Myntra is one of the best online shopping sites in India which could help transform your living spaces 
    completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware 
    to impress your guest. Wall decor, clocks, <a href="#">photo frames</a> and artificial plants are sure 
    to breathe life into any corner of your home.
  </p>
</div>

  <div class="row section-block">
  <h6>AFFORDABLE FASHION AT YOUR FINGERTIPS</h6>
  <p>
    Myntra is one of the unique online shopping sites in India where fashion is accessible to all. 
    Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. 
    You can get your hands on the trendiest style every season in western wear. 
    You can also avail the best of ethnic fashion during all Indian festive occasions. 
    You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. 
    The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.
  </p>
</div>

<div class="row section-block">
  <h6>MYNTRA INSIDER</h6>
  <p>
    Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program 
    called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered 
    customer and measures rewards in the form of Insider Points.<br></br>
    There are four levels to achieve in the program, as the Insider Points accumulate. 
    They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, 
    each tier comes with its own special perks.
  </p>

  <b>Insider</b>
  <ul>
    <li>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</li>
    <li>Curated collections from celeb stylists.</li>
  </ul>

  <b>Elite</b>
  <ul>
    <li>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
    <li>Exclusive early access to Limited Edition products</li>
  </ul>

  <b>Icon</b>
  <ul>
    <li>Chance to get on guest lists for special events.</li>
  </ul>
</div>

<div class="row section-block">
  <h6>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h6>
  <p>
    The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year,
    there is bound to be an overwhelming surge of online content. It was for this very reason that
    personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
    <br /><br />
    Several social media platforms such as Facebook and Instagram along with various online shopping websites
    have chosen to help filter content, increasing user engagement, retention and customer loyalty.
    <br /><br />
    Myntra is one such online shopping website that joins the list of platforms that help curate a personalised
    fashion feed. Named the Myntra Studio, this personalised search feed brings you the latest men and women’s
    fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.
    <br /><br />
    If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich,
    meaningful, and personalised fashion feed in your life.
  </p>

  <ol>
    <li>
      <b>Keep Up With What Your Favourite Fashion Icons Are Upto</b>
      <p>
        The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists.
        The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts
        using the hashtag has helped individuals with understanding trends and making suitable for daily wear.
        <br /><br />
        Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look
        upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track
        celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever
        miss out on the latest celebrity fashion trends, from all around the world.
      </p>
    </li>

    <li>
      <b>Quick Fashion Tip And Tricks</b>
      <p>
        Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or
        discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and
        useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of
        everything in your wardrobe.
      </p>
    </li>

    <li>
      <b>Updates on What Is Trending and New Product Launches</b>
      <p>
        Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is
        trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps
        you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life
        and so many more.
        <br /><br />
        Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and
        jewellery, along with their new seasonal collections.
      </p>
    </li>

    <li>
      <b>Explicit Step-By-Step Beauty Routines From Experts</b>
      <p>
        Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the
        latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is
        creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal
        care beauty routines, Myntra Studio is here for you.
      </p>
    </li>

    <li>
      <b>Celebrity Confessions And A Look Into Their Lives</b>
      <p>
        A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives.
        So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.
        <br /><br />
        If you are very particular when it comes to the content you wish to view and engage with on social media,
        the ability to intricately filter content helps achieve that. Applying the same formula for hardcore
        fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that
        you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way
        you want to.
      </p>
    </li>
  </ol>
</div>

        <div class="row section-block">
  <h6 class="text-dark fw-bold">MYNTRA APP</h6>
  <p class="text-secondary">
    Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic 
    to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed 
    to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by 
    introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, 
    lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your 
    <a href="#">Android</a> or <a href="#">IOS</a> device today and experience shopping like never before!
  </p>
</div>

<div class="row section-block">
  <h6 class="text-dark fw-bold">HISTORY OF MYNTRA</h6>
  <p class="text-secondary">
    Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team 
    of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. 
    The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce 
    giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its 
    platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game 
    with an astounding social media following, a loyalty program dedicated to its customers, and tempting, 
    hard-to-say-no-to deals.
    The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. 
    Download the app on your Android or IOS device this very minute to experience fashion like never before.
  </p>
</div>

<div class="row section-block">
  <h6 class="text-dark fw-bold">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h6>
  <p class="text-secondary">
    Another reason why Myntra is the best of all online stores is the complete convenience that it offers. 
    You can view your favourite brands with price options for different products in one place. A user-friendly interface 
    will guide you through your selection process. Comprehensive size charts, product information and high-resolution 
    images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card 
    or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option 
    for select products takes customer-friendliness to the next level.
    Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for 
    your friends, family and loved-ones and avail our gift services for special occasions.
  </p>
</div>
</div>
</footer>
</div>
    )
}

export default Footer;