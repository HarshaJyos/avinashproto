interface SubMenuItem {
  name: string;
  link: string;
  badge?: "Popular" | "New" | "Recommended";
}

interface MenuItem {
  name: string;
  items: {
    section: string;
    links: SubMenuItem[];
  }[];
}
export const navigationData: { [key: string]: MenuItem } = {
  "Same Day Delivery": {
    name: "Same Day Delivery",
    items: [
      {
        section: "Business Essentials",
        links: [
          { name: "Business Cards", link: "/business-cards", badge: "Popular" },
          { name: "Certificates", link: "/certificates" },
          { name: "Letterheads", link: "/letterheads" },
          { name: "Document Printing", link: "/document-printing" },
          { name: "Brochures", link: "/brochures" },
          { name: "Cards", link: "/cards" },
          { name: "Notepad", link: "/notepad" },
          {
            name: "Acrylic Table Top Stands",
            link: "/acrylic-table-top-stands",
            badge: "Popular",
          },
        ],
      },
      {
        section: "Event Stationery",
        links: [
          { name: "ID Cards", link: "/id-cards" },
          { name: "Invitations", link: "/invitations" },
          { name: "Bookmarks", link: "/bookmarks" },
          { name: "Thank You Cards", link: "/thank-you-cards" },
        ],
      },
      {
        section: "Printed Promotional Materials",
        links: [
          {
            name: "Flyers and Leaflets",
            link: "/flyers-and-leaflets",
            badge: "Recommended",
          },
          { name: "Post Cards", link: "/post-cards" },
          { name: "Posters", link: "/posters" },
          { name: "Booklets", link: "/booklets" },
          { name: "Tent Cards", link: "/tent-cards" },
          { name: "Danglers", link: "/danglers" },
        ],
      },
      {
        section: "Packaging Accessories",
        links: [
          { name: "Packaging Sleeves", link: "/packaging-sleeves" },
          {
            name: "Pre-printed Gift Wrapping Papers",
            link: "/pre-printed-gift-wrapping-papers",
            badge: "New",
          },
          { name: "Tags", link: "/tags" },
          { name: "Holographic Stickers", link: "/holographic-stickers" },
          {
            name: "Transparent Packaging Labels",
            link: "/transparent-packaging-labels",
          },
        ],
      },
    ],
  },
  "Calendars & Diaries": {
    name: "Calendars & Diaries",
    items: [
      {
        section: "Case Bound Diaries",
        links: [
          { name: "Plum Purple Diary", link: "/plum-purple-diary" },
          {
            name: "Royal Black Diary",
            link: "/royal-black-diary",
            badge: "Popular",
          },
          {
            name: "Rusty Pink Leatherette Diary",
            link: "/rusty-pink-leatherette-diary",
          },
          { name: "Matt Diaries", link: "/matt-diaries", badge: "New" },
          {
            name: "Softbound Diaries",
            link: "/softbound-diaries",
            badge: "New",
          },
          { name: "Suede Diaries", link: "/suede-diaries", badge: "New" },
          {
            name: "Denim Diaries",
            link: "/denim-diaries",
            badge: "Recommended",
          },
        ],
      },
      {
        section: "Wiro Diaries",
        links: [
          { name: "Corporate Soft Cover", link: "/corporate-soft-cover" },
          {
            name: "Corporate Hard Cover",
            link: "/corporate-hard-cover",
            badge: "Recommended",
          },
          {
            name: "Executive Diary with Pen",
            link: "/executive-diary-with-pen",
          },
          { name: "Kraft Diary", link: "/kraft-diary" },
          { name: "Canvas Diaries", link: "/canvas-diaries" },
          {
            name: "Personal Hardcover Diary",
            link: "/personal-hardcover-diary",
            badge: "Popular",
          },
        ],
      },
      {
        section: "Calendars",
        links: [
          { name: "Desk Calendars", link: "/desk-calendars", badge: "Popular" },
          { name: "Wall Calendars", link: "/wall-calendars" },
          { name: "Frame Calendars", link: "/frame-calendars" },
          { name: "View All", link: "/calendars" },
        ],
      },
      {
        section: "Organizers",
        links: [
          {
            name: "Matt Blue Organizer",
            link: "/matt-blue-organizer",
            badge: "New",
          },
          { name: "Retro Tan Organizer", link: "/retro-tan-organizer" },
          {
            name: "Grey Buckle Organizer",
            link: "/grey-buckle-organizer",
            badge: "New",
          },
          {
            name: "Matt Stone Black Organizer",
            link: "/matt-stone-black-organizer",
          },
        ],
      },
      {
        section: "Best Sellers",
        links: [
          { name: "Long Desk Calendars", link: "/long-desk-calendars" },
          { name: "A5 Desk Calendars", link: "/a5-desk-calendars" },
          {
            name: "Camel Tan Leatherette Diary",
            link: "/camel-tan-leatherette-diary",
          },
          {
            name: "Blissful Beige Leatherette Diary",
            link: "/blissful-beige-leatherette-diary",
          },
          { name: "Grey Buckle Diary", link: "/grey-buckle-diary" },
          { name: "Executive Diaries", link: "/executive-diaries" },
        ],
      },
    ],
  },
  Stationery: {
    name: "Stationery",
    items: [
      {
        section: "Business Cards",
        links: [
          { name: "Premium Laminated Cards", link: "/premium-laminated-cards" },
          { name: "Sandwich Business Cards", link: "/sandwich-business-cards" },
          {
            name: "Standard Business Cards",
            link: "/standard-business-cards",
            badge: "Recommended",
          },
          { name: "Textured Business Cards", link: "/textured-business-cards" },
          { name: "Spot UV Business Cards", link: "/spot-uv-business-cards" },
          {
            name: "Translucent Business Cards",
            link: "/translucent-business-cards",
          },
          {
            name: "Eco-Friendly Business Cards",
            link: "/eco-friendly-business-cards",
          },
          {
            name: "Premium Velvet Business Cards",
            link: "/premium-velvet-business-cards",
            badge: "New",
          },
          {
            name: "Foiling Business Cards",
            link: "/foiling-business-cards",
            badge: "New",
          },
        ],
      },
      {
        section: "Notebooks",
        links: [
          { name: "Wiro Notebook", link: "/wiro-notebook" },
          { name: "Staple Notebook", link: "/staple-notebook" },
          {
            name: "Perfect Bind Notebook",
            link: "/perfect-bind-notebook",
            badge: "Popular",
          },
          { name: "Hard Cover Notebook", link: "/hard-cover-notebook" },
          {
            name: "Inspiracion HardCover Notebook",
            link: "/inspiracion-hardcover-notebook",
          },
          {
            name: "Grassetto Softcover Notebook",
            link: "/grassetto-softcover-notebook",
          },
        ],
      },
      {
        section: "Office Supplies",
        links: [
          { name: "Letterheads", link: "/letterheads" },
          { name: "Envelopes", link: "/envelopes" },
          { name: "Rubber Stamps", link: "/rubber-stamps" },
          { name: "Bill Books", link: "/bill-books" },
          { name: "Presentation Folders", link: "/presentation-folders" },
          {
            name: "Foiled Certificates",
            link: "/foiled-certificates",
            badge: "New",
          },
        ],
      },
      {
        section: "Everyday Office Tools",
        links: [
          { name: "Notepads", link: "/notepads" },
          { name: "Pens", link: "/pens" },
          {
            name: "Personalized Desk Calendars",
            link: "/personalized-desk-calendars",
          },
          { name: "Mousepads", link: "/mousepads" },
          { name: "Writing Boards", link: "/writing-boards" },
        ],
      },
      {
        section: "Invitations and Cards",
        links: [
          { name: "Wedding Invitations", link: "/wedding-invitations" },
          { name: "Thankyou Cards", link: "/thankyou-cards" },
          { name: "Post Cards", link: "/post-cards" },
          { name: "Business Invitations", link: "/business-invitations" },
          { name: "Greeting Cards", link: "/greeting-cards" },
          { name: "Save The Date Cards", link: "/save-the-date-cards" },
          { name: "Birthday Invitations", link: "/birthday-invitations" },
        ],
      },
      {
        section: "ID Cards & Lanyards",
        links: [
          { name: "ID Cards", link: "/id-cards", badge: "Recommended" },
          { name: "Lanyards", link: "/lanyards" },
          { name: "Event ID Cards", link: "/event-id-cards", badge: "New" },
          { name: "ID card Accessories", link: "/id-card-accessories" },
        ],
      },
      {
        section: "Accessories & More",
        links: [
          { name: "Magnets", link: "/magnets" },
          { name: "Posters", link: "/posters" },
          { name: "Stickers", link: "/stickers" },
          { name: "Booklets", link: "/booklets" },
          { name: "Vouchers", link: "/vouchers" },
          { name: "Business Card Holders", link: "/business-card-holders" },
        ],
      },
    ],
  },
  "Corporate Gifts": {
    name: "Corporate Gifts",
    items: [
      {
        section: "Employee Joining Kits",
        links: [
          { name: "Keep Hustling", link: "/keep-hustling" },
          { name: "Novelty", link: "/novelty" },
          { name: "Brilliance", link: "/brilliance" },
          { name: "View All", link: "/employee-joining-kits" },
        ],
      },
      {
        section: "Employee Engagement Kit",
        links: [
          { name: "Work Essentials Kit", link: "/work-essentials-kit" },
          { name: "Eco Essentials Kit", link: "/eco-essentials-kit" },
          { name: "Induction Welcome Kit", link: "/induction-welcome-kit" },
          { name: "In The Zone Kit", link: "/in-the-zone-kit" },
          { name: "View All", link: "/employee-engagement-kit" },
        ],
      },
      {
        section: "New Year Hampers",
        links: [
          { name: "Creative Corner", link: "/creative-corner" },
          { name: "Brews nd Resolutions", link: "/brews-nd-resolutions" },
          { name: "Eco Expressions", link: "/eco-expressions" },
          { name: "View All", link: "/new-year-hampers" },
        ],
      },
      {
        section: "Drinkware",
        links: [
          { name: "Premium Bottles", link: "/premium-bottles" },
          { name: "Mugs", link: "/mugs" },
          { name: "Sipper Bottles", link: "/sipper-bottles" },
          { name: "Spill free mug", link: "/spill-free-mug" },
        ],
      },
      {
        section: "Rewards and Recognition",
        links: [
          { name: "Awards", link: "/awards", badge: "Popular" },
          { name: "Certificates", link: "/certificates" },
          { name: "Medals", link: "/medals" },
          { name: "Metal Trophies", link: "/metal-trophies" },
        ],
      },
      {
        section: "Accessories",
        links: [
          {
            name: "Laptop Stickers",
            link: "/laptop-stickers",
            badge: "Popular",
          },
          { name: "Pens", link: "/pens" },
          { name: "Mouse Pad", link: "/mouse-pad" },
          { name: "Luggage Tags", link: "/luggage-tags" },
          { name: "Caps", link: "/caps" },
          { name: "Key Chains", link: "/key-chains", badge: "Recommended" },
        ],
      },
    ],
  },
  "Labels & Packaging": {
    name: "Labels & Packaging",
    items: [
      {
        section: "Stickers",
        links: [
          { name: "Circle Stickers", link: "/circle-stickers" },
          { name: "Square Stickers", link: "/square-stickers" },
          { name: "Rectangle Stickers", link: "/rectangle-stickers" },
          { name: "Custom Shape Stickers", link: "/custom-shape-stickers" },
          { name: "Die-Cut Stickers", link: "/die-cut-stickers" },
          { name: "Sticker Sheets", link: "/sticker-sheets" },
          {
            name: "Matte finish Stickers",
            link: "/matte-finish-stickers",
            badge: "New",
          },
          { name: "Premium Stickers", link: "/premium-stickers" },
          { name: "Gold Foil Stickers", link: "/gold-foil-stickers" },
          { name: "Silver Foil Stickers", link: "/silver-foil-stickers" },
          { name: "Dome Stickers", link: "/dome-stickers" },
          { name: "Front Adhesive Stickers", link: "/front-adhesive-stickers" },
          {
            name: "Holographic Stickers",
            link: "/holographic-stickers",
            badge: "New",
          },
        ],
      },
      {
        section: "Labels",
        links: [
          {
            name: "Product Packaging Labels",
            link: "/product-packaging-labels",
            badge: "Recommended",
          },
          { name: "Transparent Labels", link: "/transparent-labels" },
          {
            name: "Water Proof Labels",
            link: "/water-proof-labels",
            badge: "Recommended",
          },
          { name: "Sheet Labels", link: "/sheet-labels" },
          { name: "Kraft Labels", link: "/kraft-labels" },
          { name: "Premium Labels", link: "/premium-labels", badge: "New" },
        ],
      },
      {
        section: "Others",
        links: [
          { name: "Laptop Stickers", link: "/laptop-stickers" },
          { name: "Bumper Stickers", link: "/bumper-stickers" },
          { name: "Window Stickers", link: "/window-stickers" },
          { name: "Custom Shape Labels", link: "/custom-shape-labels" },
        ],
      },
      {
        section: "Boxes and Packaging",
        links: [
          { name: "Mailer Boxes", link: "/mailer-boxes", badge: "Popular" },
          { name: "Shipping Carton Boxes", link: "/shipping-carton-boxes" },
          { name: "Food Boxes", link: "/food-boxes" },
          { name: "Pizza Boxes", link: "/pizza-boxes" },
          {
            name: "Sleeved Mailer Boxes",
            link: "/sleeved-mailer-boxes",
            badge: "New",
          },
          { name: "Flat Mailer Boxes", link: "/flat-mailer-boxes" },
          {
            name: "Paper Bags",
            link: "/paper-bags",
            badge: "New",
          },
        ],
      },
      {
        section: "Shipping and Packaging",
        links: [
          {
            name: "Courier PolyBags",
            link: "/courier-polybags",
            badge: "New",
          },
          { name: "Packing Tape", link: "/packing-tape" },
          { name: "Shipping Envelopes", link: "/shipping-envelopes" },
          { name: "Cotton Carry Bags", link: "/cotton-carry-bags" },
          { name: "Paper Pouches", link: "/paper-pouches" },
          {
            name: "Kraft Shipping Envelopes",
            link: "/kraft-shipping-envelopes",
            badge: "New",
          },
        ],
      },
      {
        section: "Hospitality",
        links: [
          { name: "Menu Cards", link: "/menu-cards" },
          { name: "Placemats", link: "/placemats" },
          { name: "Tent Cards", link: "/tent-cards" },
          { name: "Door Hangers", link: "/door-hangers" },
          { name: "Thankyou Cards", link: "/thankyou-cards" },
          { name: "Drink Coasters", link: "/drink-coasters" },
        ],
      },
      {
        section: "Packaging Accessories",
        links: [
          { name: "Hangtags", link: "/hangtags" },
          { name: "Gift Wrapping Paper", link: "/gift-wrapping-paper" },
          { name: "Kraft Tapes", link: "/kraft-tapes" },
          { name: "Tote Bags", link: "/tote-bags", badge: "New" },
          {
            name: "Printed Boxes with Stickers",
            link: "/printed-boxes-with-stickers",
          },
          { name: "Packing Sleeves", link: "/packing-sleeves" },
          { name: "Jute Bags", link: "/jute-bags" },
        ],
      },
    ],
  },
  Apparel: {
    name: "Apparel",
    items: [
      {
        section: "T-shirts",
        links: [
          {
            name: "Classic Cotton T-Shirts",
            link: "/classic-cotton-tshirts",
            badge: "Recommended",
          },
          { name: "Regular Polo T-Shirts", link: "/regular-polo-tshirts" },
          {
            name: "Premium Polo T-shirts",
            link: "/premium-polo-tshirts",
            badge: "Popular",
          },
          { name: "V-neck T-shirts", link: "/v-neck-tshirts" },
          { name: "Rare Rabbit T-shirts", link: "/rare-rabbit-tshirts" },
          { name: "Dri-fit T-shirts", link: "/dri-fit-tshirts" },
          { name: "Branded T-shirts", link: "/branded-tshirts" },
          { name: "Rare Rabbit Polos", link: "/rare-rabbit-polos" },
          {
            name: "Jack and Jones Polos",
            link: "/jack-and-jones-polos",
            badge: "New",
          },
          { name: "M and S Polo T-shirts", link: "/m-and-s-polo-tshirts" },
          {
            name: "M and S Round Neck T-shirts",
            link: "/m-and-s-round-neck-tshirts",
            badge: "New",
          },
        ],
      },
      {
        section: "Sweatshirts & Hoodies",
        links: [
          {
            name: "Personalized Hoodies",
            link: "/personalized-hoodies",
            badge: "Popular",
          },
          {
            name: "Personalized Zipper Hoodies",
            link: "/personalized-zipper-hoodies",
          },
          { name: "Embroidered Hoodies", link: "/embroidered-hoodies" },
          {
            name: "Personalized Non-Zipper Hoodies",
            link: "/personalized-non-zipper-hoodies",
          },
          {
            name: "High Neck Jackets",
            link: "/high-neck-jackets",
            badge: "New",
          },
        ],
      },
      {
        section: "Caps",
        links: [
          { name: "Printed Caps", link: "/printed-caps" },
          {
            name: "Line Stitching Caps with embroidery",
            link: "/line-stitching-caps",
          },
          { name: "Piping Caps with embroidery", link: "/piping-caps" },
          {
            name: "Embroidered Tipping Caps",
            link: "/embroidered-tipping-caps",
          },
        ],
      },
      {
        section: "Backpack and Tote bags",
        links: [
          { name: "Laptop Backpacks", link: "/laptop-backpacks" },
          { name: "Laptop Sleeves", link: "/laptop-sleeves" },
          { name: "Personalized Tote Bags", link: "/personalized-tote-bags" },
        ],
      },
    ],
  },
  Signages: {
    name: "Signages",
    items: [
      {
        section: "Outdoor Signages",
        links: [
          { name: "Banners", link: "/banners" },
          { name: "Standees", link: "/standees" },
          { name: "Board Signs", link: "/board-signs" },
        ],
      },
      {
        section: "Indoor Signs",
        links: [
          { name: "Name Plates", link: "/name-plates" },
          {
            name: "Acrylic Desk Stand",
            link: "/acrylic-desk-stand",
            badge: "Popular",
          },
          { name: "Sun Board Posters", link: "/sun-board-posters" },
          { name: "Large format stickers", link: "/large-format-stickers" },
          { name: "Posters", link: "/posters" },
          { name: "Wall Decals", link: "/wall-decals" },
          { name: "Door Hangers", link: "/door-hangers" },
          { name: "Window Stickers", link: "/window-stickers" },
          {
            name: "Acrylic QR Code Stand",
            link: "/acrylic-qr-code-stand",
            badge: "New",
          },
        ],
      },
      {
        section: "Event Signages",
        links: [
          { name: "Event Standees", link: "/event-standees" },
          { name: "Danglers", link: "/danglers" },
          { name: "Premium Wall Posters", link: "/premium-wall-posters" },
        ],
      },
      {
        section: "Name Plates",
        links: [
          {
            name: "Acrylic Name Plates",
            link: "/acrylic-name-plates",
            badge: "Recommended",
          },
          { name: "Bellissimo Name Plates", link: "/bellissimo-name-plates" },
          {
            name: "Steel Engraved Name Plates",
            link: "/steel-engraved-name-plates",
          },
          { name: "Embossed Name Plates", link: "/embossed-name-plates" },
          { name: "Debossed Name Plates", link: "/debossed-name-plates" },
        ],
      },
      {
        section: "Custom Signage & Decor",
        links: [
          { name: "LED Frames", link: "/led-frames" },
          { name: "Canvas", link: "/canvas" },
          { name: "Bumper Stickers", link: "/bumper-stickers" },
          { name: "Window Decals", link: "/window-decals" },
          { name: "Wall Frames", link: "/wall-frames" },
        ],
      },
    ],
  },
  "Marketing & Promo": {
    name: "Marketing & Promo",
    items: [
      {
        section: "Marketing Materials",
        links: [
          { name: "Flyers", link: "/flyers", badge: "Popular" },
          { name: "Banners", link: "/banners" },
          { name: "Standees", link: "/standees" },
          { name: "Presentation Folders", link: "/presentation-folders" },
          { name: "Posters", link: "/posters", badge: "Popular" },
          { name: "Booklets", link: "/booklets" },
          { name: "Acrylic Desk Stand", link: "/acrylic-desk-stand" },
          { name: "Tent Cards", link: "/tent-cards" },
          { name: "Danglers", link: "/danglers" },
          { name: "Decals", link: "/decals" },
          { name: "Canvas Posters", link: "/canvas-posters" },
          { name: "Outdoor Name Plates", link: "/outdoor-name-plates" },
          { name: "Brochures", link: "/brochures" },
        ],
      },
      {
        section: "Promotional Items",
        links: [
          {
            name: "Promotional Mugs",
            link: "/promotional-mugs",
            badge: "Recommended",
          },
          { name: "Promotional T-Shirts", link: "/promotional-tshirts" },
          { name: "Promotional Caps", link: "/promotional-caps" },
          {
            name: "Promotional Totes",
            link: "/promotional-totes",
            badge: "Recommended",
          },
          { name: "Promotional Pens", link: "/promotional-pens" },
          { name: "Promotional Notebooks", link: "/promotional-notebooks" },
        ],
      },
      {
        section: "Giveaways",
        links: [
          { name: "Coupon Cards", link: "/coupon-cards" },
          { name: "Laptop Stickers", link: "/laptop-stickers" },
          { name: "Drinkware", link: "/drinkware" },
          { name: "Notebooks", link: "/notebooks" },
          { name: "Fridge Magnets", link: "/fridge-magnets" },
          { name: "Organizers", link: "/organizers" },
        ],
      },
    ],
  },
  "Photo Gifts": {
    name: "Photo Gifts",
    items: [
      {
        section: "Most Popular",
        links: [
          { name: "Photo Frames", link: "/photo-frames" },
          { name: "Canvas Gallery Wraps", link: "/canvas-gallery-wraps" },
          { name: "Acrylic Prints", link: "/acrylic-prints" },
          { name: "Mugs", link: "/mugs" },
          { name: "Photo Books", link: "/photo-books" },
        ],
      },
      {
        section: "Prints & Decor",
        links: [
          { name: "Photo Prints", link: "/photo-prints" },
          { name: "Photo Plaque", link: "/photo-plaque" },
          { name: "Posters", link: "/posters" },
          { name: "Fridge Magnets", link: "/fridge-magnets" },
          { name: "Canvas Prints", link: "/canvas-prints", badge: "New" },
          { name: "Frameless Photo Frames", link: "/frameless-photo-frames" },
          { name: "LED Photo Frames", link: "/led-photo-frames" },
          {
            name: "Leatherette Acrylic Frame",
            link: "/leatherette-acrylic-frame",
            badge: "New",
          },
        ],
      },
      {
        section: "Photo Frames",
        links: [
          {
            name: "Classic Photo Frames",
            link: "/classic-photo-frames",
            badge: "Popular",
          },
          { name: "Wall Photo Frames", link: "/wall-photo-frames" },
          { name: "Collage Photo Frames", link: "/collage-photo-frames" },
          {
            name: "Matte Finish Photo Frames",
            link: "/matte-finish-photo-frames",
          },
          {
            name: "Canvas Photo Frames",
            link: "/canvas-photo-frames",
            badge: "Recommended",
          },
        ],
      },
      {
        section: "Photo Books",
        links: [
          { name: "Wedding Photo Book", link: "/wedding-photo-book" },
          { name: "Birthday Photo Book", link: "/birthday-photo-book" },
          {
            name: "Love & Family Photo Book",
            link: "/love-and-family-photo-book",
          },
          { name: "Travel Photo Book", link: "/travel-photo-book" },
        ],
      },
    ],
  },
};