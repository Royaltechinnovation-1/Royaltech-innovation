import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardCheck,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Dumbbell,
  FileText,
  Gem,
  Globe2,
  Headphones,
  HeartPulse,
  Lamp,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  Network,
  Package,
  Plug,
  RefreshCw,
  Search,
  Settings,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Store,
  Truck,
  UserRoundCog,
  UsersRound,
  Wallet,
  Watch,
  Workflow,
} from "lucide-react";
import {
  Dot,
  IllustrationNote,
  Metric,
  MiniNode,
  PanelLabel,
  ResourceRow,
  StatusLine,
  TinyChart,
  Window,
} from "./ui";

const revenueLine = "M0 68 L26 60 L52 64 L78 46 L104 54 L130 36 L156 44 L182 24 L208 34 L234 18 L260 26 L286 14 L320 10";
const ordersLine = "M0 72 L30 66 L60 69 L90 52 L120 58 L150 40 L180 48 L210 30 L240 37 L270 22 L300 29 L320 20";
const trafficLine = "M0 74 L28 70 L56 58 L84 64 L112 48 L140 53 L168 38 L196 44 L224 28 L252 35 L280 21 L320 16";
const conversionLine = "M0 76 L32 68 L64 72 L96 54 L128 60 L160 42 L192 48 L224 32 L256 38 L288 24 L320 18";

type ThumbTone = "cyan" | "blue" | "violet" | "green" | "amber";

function ProductThumb({
  icon,
  tone = "cyan",
  label,
}: {
  icon: React.ReactNode;
  tone?: ThumbTone;
  label?: string;
}) {
  return (
    <span className={`ec-product-thumb is-${tone}`}>
      <span className="ec-product-thumb-art">{icon}</span>
      {label ? <small>{label}</small> : null}
    </span>
  );
}

function StoreNavRow({ label, active = false, icon }: { label: string; active?: boolean; icon: React.ReactNode }) {
  return (
    <span className={active ? "is-active" : undefined}>
      {icon}
      {label}
    </span>
  );
}

function OrderRow({ id, customer, status, value }: { id: string; customer: string; status: string; value: string }) {
  return (
    <div className="ec-order-row">
      <span className="ec-mono">{id}</span>
      <span>{customer}</span>
      <span className={`ec-badge ${status === "paid" ? "is-green" : status === "pending" ? "is-amber" : "is-cyan"}`}>{status}</span>
      <span className="ec-mono">{value}</span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="ec-hero-visual"
      role="img"
      aria-label="Illustrative ecommerce interface showing a storefront, product catalog, shopping cart, checkout, payment, order management and sales analytics with sample data"
    >
      <div className="ec-hero-aurora" />
      <div className="ec-hero-gridlines" />
      <Window title="shop.royaltech / store workspace" meta="sample store" className="ec-hero-window">
        <div className="ec-store-shell">
          <aside className="ec-store-sidebar">
            <span className="ec-store-logo"><Store size={15} /> Commerce</span>
            <StoreNavRow label="Overview" active icon={<LayoutDashboard size={13} />} />
            <StoreNavRow label="Products" icon={<Package size={13} />} />
            <StoreNavRow label="Orders" icon={<ShoppingCart size={13} />} />
            <StoreNavRow label="Customers" icon={<UsersRound size={13} />} />
            <StoreNavRow label="Analytics" icon={<BarChart3 size={13} />} />
            <StoreNavRow label="Settings" icon={<Settings size={13} />} />
          </aside>

          <div className="ec-store-main">
            <div className="ec-store-top">
              <span>Store overview</span>
              <span className="ec-mono">last 30 days · sample</span>
            </div>
            <div className="ec-store-metrics">
              <Metric label="Store visits" value="18,420" tone="cyan" note="sample" />
              <Metric label="Orders" value="486" tone="blue" note="sample" />
              <Metric label="Revenue" value="₹8.4L" tone="violet" note="sample" />
            </div>
            <div className="ec-store-catalog">
              <PanelLabel>Featured products</PanelLabel>
              <div className="ec-product-grid">
                <div className="ec-product-card"><ProductThumb icon={<Shirt size={20} />} tone="cyan" label="Apparel" /><strong>Linen Shirt</strong><span className="ec-mono">₹1,299</span></div>
                <div className="ec-product-card"><ProductThumb icon={<Headphones size={20} />} tone="violet" label="Audio" /><strong>Studio Headset</strong><span className="ec-mono">₹4,499</span></div>
                <div className="ec-product-card"><ProductThumb icon={<Lamp size={20} />} tone="amber" label="Home" /><strong>Desk Lamp</strong><span className="ec-mono">₹2,199</span></div>
              </div>
            </div>
            <div className="ec-chart-card">
              <div className="ec-chart-head"><span>Revenue overview</span><span className="ec-mono">30d</span></div>
              <TinyChart line={revenueLine} fillId="ecHeroRevenue" />
            </div>
          </div>

          <aside className="ec-store-side">
            <PanelLabel>Shopping cart</PanelLabel>
            <div className="ec-cart-line"><ProductThumb icon={<Shirt size={13} />} tone="cyan" /><span>Linen Shirt <small>Qty 1</small></span><b className="ec-mono">₹1,299</b></div>
            <div className="ec-cart-line"><ProductThumb icon={<Watch size={13} />} tone="blue" /><span>Field Watch <small>Qty 1</small></span><b className="ec-mono">₹3,899</b></div>
            <div className="ec-cart-total"><span>Subtotal</span><b className="ec-mono">₹5,198</b></div>
            <div className="ec-cart-action">Continue to checkout <ArrowRight size={12} /></div>
            <div className="ec-checkout-mini">
              <PanelLabel>Checkout</PanelLabel>
              <div className="ec-cap-flow"><span>Delivery</span><span className="is-active">Payment</span><span>Review</span></div>
              <div className="ec-checkout-mini-row"><span>Customer</span><span className="ec-mono">A. Sharma</span></div>
            </div>
            <PanelLabel>Recent orders</PanelLabel>
            <OrderRow id="#1048" customer="A. Sharma" status="paid" value="₹5,198" />
            <OrderRow id="#1047" customer="R. Verma" status="pending" value="₹2,199" />
            <div className="ec-store-chart"><TinyChart line={ordersLine} fillId="ecHeroOrders" tone="violet" /></div>
          </aside>
        </div>
      </Window>
      <div className="ec-float ec-float-storefront">
        <div className="ec-float-head"><Store size={13} /> <span>Storefront</span><Dot tone="green" /></div>
        <div className="ec-float-products"><ProductThumb icon={<Gem size={14} />} tone="violet" /><ProductThumb icon={<Dumbbell size={14} />} tone="green" /><ProductThumb icon={<ShoppingBag size={14} />} tone="blue" /></div>
        <strong>Catalog updated</strong>
      </div>
      <div className="ec-float ec-float-payment">
        <div className="ec-float-head"><CreditCard size={13} /> <span>Payment</span></div>
        <div className="ec-float-row"><span>order #1048</span><span className="ec-badge is-green">paid</span></div>
        <div className="ec-float-row"><span>card ···· 4242</span><span className="ec-mono">sample</span></div>
      </div>
      <div className="ec-float ec-float-orders">
        <Truck size={16} />
        <span>order fulfilment</span>
        <b>processing</b>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IntroVisual() {
  return (
    <div className="ec-intro-visual" role="img" aria-label="Illustrative ecommerce experience map showing storefront, product listing, cart, checkout, payment and order management with sample data">
      <Window title="Commerce / experience map" meta="journey" className="ec-intro-window">
        <div className="ec-intro-top">
          <div className="ec-intro-storefront">
            <PanelLabel>Storefront</PanelLabel>
            <div className="ec-intro-banner"><span>New season collection</span><small>Explore products</small></div>
            <div className="ec-product-grid is-small">
              <ProductThumb icon={<Shirt size={13} />} tone="cyan" label="Apparel" />
              <ProductThumb icon={<Headphones size={13} />} tone="violet" label="Audio" />
              <ProductThumb icon={<Lamp size={13} />} tone="amber" label="Home" />
            </div>
          </div>
          <div className="ec-intro-flow">
            <PanelLabel>Customer journey</PanelLabel>
            <MiniNode icon={<Search size={14} />} label="Discover" meta="catalog" />
            <MiniNode icon={<ShoppingCart size={14} />} label="Add to cart" meta="selection" tone="blue" />
            <MiniNode icon={<CreditCard size={14} />} label="Checkout" meta="payment" tone="violet" />
            <MiniNode icon={<Package size={14} />} label="Order" meta="fulfilment" tone="green" />
          </div>
        </div>
        <div className="ec-intro-bottom">
          <div className="ec-intro-activity">
            <PanelLabel>Checkout &amp; payment</PanelLabel>
            <div className="ec-workflow-row"><span className="ec-workflow-icon is-done"><Check size={11} /></span><span>Cart reviewed</span><small className="ec-mono">complete</small></div>
            <div className="ec-workflow-row"><span className="ec-workflow-icon is-done"><Check size={11} /></span><span>Delivery details</span><small className="ec-mono">complete</small></div>
            <div className="ec-workflow-row"><span className="ec-workflow-icon is-run"><RefreshCw size={11} /></span><span>Payment status</span><small className="ec-mono">checking</small></div>
          </div>
          <div className="ec-intro-metrics">
            <PanelLabel>Store operations</PanelLabel>
            <ResourceRow name="Catalog ready" value={72} detail="sample" />
            <ResourceRow name="Orders processed" value={54} tone="blue" detail="486" />
            <ResourceRow name="Inventory visibility" value={66} tone="green" detail="sample" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

function StorefrontPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`ec-storefront-preview${compact ? " is-compact" : ""}`}>
      <div className="ec-storefront-nav"><strong>RoyalTech Store</strong><span>New</span><span>Collections</span><span>Offers</span><ShoppingBag size={13} /></div>
      <div className="ec-storefront-banner"><div><small>Featured collection</small><strong>Everyday essentials</strong><span>Explore products</span></div><ProductThumb icon={<Sparkles size={26} />} tone="cyan" /></div>
      <div className="ec-product-grid">
        <div className="ec-product-card"><ProductThumb icon={<Shirt size={19} />} tone="cyan" label="Apparel" /><strong>Linen Shirt</strong><span className="ec-mono">₹1,299</span></div>
        <div className="ec-product-card"><ProductThumb icon={<Watch size={19} />} tone="blue" label="Accessories" /><strong>Field Watch</strong><span className="ec-mono">₹3,899</span></div>
        <div className="ec-product-card"><ProductThumb icon={<Headphones size={19} />} tone="violet" label="Audio" /><strong>Studio Headset</strong><span className="ec-mono">₹4,499</span></div>
      </div>
    </div>
  );
}

export function OnlineStoreVisual() {
  return (
    <div className="ec-dashboard ec-online-store-dashboard" role="img" aria-label="Custom online store preview with storefront, product categories, product cards, cart and store dashboard using sample data">
      <Window title="Online store / homepage" meta="storefront preview" className="ec-store-window">
        <StorefrontPreview />
        <div className="ec-store-dashboard-strip">
          <PanelLabel>Store dashboard</PanelLabel>
          <div className="ec-store-dashboard-metrics">
            <Metric label="Products" value="128" note="active" />
            <Metric label="Categories" value="14" tone="blue" />
            <Metric label="Orders" value="486" tone="violet" note="sample" />
            <Metric label="Customers" value="1,204" tone="green" note="sample" />
          </div>
          <div className="ec-store-dashboard-flow"><span>Catalog</span><span>Cart</span><span className="is-active">Checkout</span><span>Orders</span></div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

function VendorRow({ name, initials, products, status, tone = "cyan" }: { name: string; initials: string; products: string; status: string; tone?: ThumbTone }) {
  return (
    <div className="ec-vendor-row">
      <span className={`ec-vendor-avatar is-${tone}`}>{initials}</span>
      <span><strong>{name}</strong><small>{products}</small></span>
      <span className={`ec-badge ${status === "active" ? "is-green" : "is-cyan"}`}>{status}</span>
    </div>
  );
}

export function MarketplaceVisual() {
  return (
    <div className="ec-dashboard ec-marketplace-dashboard" role="img" aria-label="Multi-vendor marketplace interface with sellers, vendor profiles, product listings, orders, commissions and marketplace analytics using sample data">
      <Window title="Marketplace / operations" meta="sample data" className="ec-marketplace-window">
        <div className="ec-marketplace-metrics">
          <Metric label="Active sellers" value="42" note="sample" />
          <Metric label="Product listings" value="1,860" tone="blue" note="sample" />
          <Metric label="Marketplace orders" value="736" tone="violet" note="sample" />
        </div>
        <div className="ec-marketplace-grid">
          <div>
            <PanelLabel>Seller management</PanelLabel>
            <VendorRow name="Studio North" initials="SN" products="184 products" status="active" />
            <VendorRow name="Pixel Goods" initials="PG" products="96 products" status="active" tone="blue" />
            <VendorRow name="Home & Co." initials="HC" products="72 products" status="review" tone="violet" />
          </div>
          <div>
            <PanelLabel>Commission overview</PanelLabel>
            <ResourceRow name="Studio North" value={68} detail="12% · sample" />
            <ResourceRow name="Pixel Goods" value={44} tone="blue" detail="10% · sample" />
            <ResourceRow name="Home & Co." value={32} tone="violet" detail="15% · sample" />
          </div>
          <div>
            <PanelLabel>Marketplace activity</PanelLabel>
            <TinyChart line={trafficLine} fillId="ecMarketplaceChart" />
            <div className="ec-chart-legend"><span><i className="is-cyan" />Orders</span><span><i className="is-violet" />Listings</span></div>
          </div>
        </div>
        <div className="ec-marketplace-orders">
          <PanelLabel>Recent marketplace orders</PanelLabel>
          <OrderRow id="#2081" customer="L. Kapoor" status="paid" value="₹2,480" />
          <OrderRow id="#2080" customer="M. Singh" status="pending" value="₹1,199" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

function B2CStoreVisual() {
  return (
    <div className="ec-commerce-half is-b2c">
      <div className="ec-half-head"><span className="ec-tag is-cyan">B2C</span><strong>Consumer storefront</strong></div>
      <div className="ec-b2c-store">
        <div className="ec-b2c-nav"><Store size={13} /><span>Shop</span><span>Collections</span><ShoppingCart size={13} /></div>
        <div className="ec-product-grid is-small">
          <ProductThumb icon={<Shirt size={13} />} tone="cyan" label="New" />
          <ProductThumb icon={<Headphones size={13} />} tone="violet" label="Audio" />
          <ProductThumb icon={<Gem size={13} />} tone="amber" label="Jewelry" />
        </div>
        <div className="ec-b2c-cart"><span>Cart · 2 items</span><b className="ec-mono">₹5,198</b></div>
        <div className="ec-cap-flow"><span>Product</span><span>Cart</span><span className="is-active">Checkout</span></div>
      </div>
    </div>
  );
}

function B2BPortalVisual() {
  return (
    <div className="ec-commerce-half is-b2b">
      <div className="ec-half-head"><span className="ec-tag is-blue">B2B</span><strong>Business customer portal</strong></div>
      <div className="ec-b2b-portal">
        <PanelLabel>Wholesale ordering</PanelLabel>
        <div className="ec-b2b-line"><ProductThumb icon={<Package size={13} />} tone="blue" /><span>Bulk pack · 48 units<small>Custom price</small></span><span className="ec-mono">₹842 / unit</span></div>
        <div className="ec-b2b-line"><ProductThumb icon={<Boxes size={13} />} tone="green" /><span>Carton bundle<small>Account price</small></span><span className="ec-mono">₹1,120</span></div>
        <div className="ec-b2b-order"><span>Quantity</span><strong>48</strong><span>PO required</span><span className="ec-badge is-cyan">enabled</span></div>
        <div className="ec-cap-flow"><span>Account</span><span>Bulk order</span><span className="is-active">Purchase order</span></div>
      </div>
    </div>
  );
}

export function B2bB2cVisual() {
  return (
    <div className="ec-dashboard ec-b2b2c-dashboard" role="img" aria-label="Split interface comparing a B2C consumer storefront with a B2B wholesale portal showing custom pricing and bulk ordering">
      <B2CStoreVisual />
      <B2BPortalVisual />
      <IllustrationNote />
    </div>
  );
}

export function ShoppingCartVisual() {
  return (
    <div className="ec-dashboard ec-cart-dashboard" role="img" aria-label="Shopping cart interface with product thumbnails, quantity controls, discount, shipping, totals and checkout button using sample data">
      <Window title="Shopping cart / checkout" meta="sample cart" className="ec-cart-window">
        <div className="ec-cart-layout">
          <div className="ec-cart-items">
            <PanelLabel>Your cart · 3 items</PanelLabel>
            <div className="ec-cart-item"><ProductThumb icon={<Shirt size={18} />} tone="cyan" /><div><strong>Linen Shirt</strong><small>Size M · Sand</small><div className="ec-qty"><span aria-hidden="true">−</span><span>1</span><span aria-hidden="true">+</span></div></div><b className="ec-mono">₹1,299</b></div>
            <div className="ec-cart-item"><ProductThumb icon={<Watch size={18} />} tone="blue" /><div><strong>Field Watch</strong><small>Black · 42mm</small><div className="ec-qty"><span aria-hidden="true">−</span><span>1</span><span aria-hidden="true">+</span></div></div><b className="ec-mono">₹3,899</b></div>
            <div className="ec-cart-item"><ProductThumb icon={<Lamp size={18} />} tone="amber" /><div><strong>Desk Lamp</strong><small>Warm white</small><div className="ec-qty"><span aria-hidden="true">−</span><span>1</span><span aria-hidden="true">+</span></div></div><b className="ec-mono">₹2,199</b></div>
            <div className="ec-cart-perks"><Truck size={14} /><span>Free shipping on this sample order</span><span className="ec-badge is-green">applied</span></div>
          </div>
          <div className="ec-cart-summary">
            <PanelLabel>Order summary</PanelLabel>
            <div className="ec-summary-row"><span>Subtotal</span><b className="ec-mono">₹7,397</b></div>
            <div className="ec-summary-row"><span>Discount · WELCOME</span><b className="ec-mono is-green">− ₹500</b></div>
            <div className="ec-summary-row"><span>Shipping</span><b className="ec-mono">₹0</b></div>
            <div className="ec-summary-row"><span>Estimated tax</span><b className="ec-mono">₹1,181</b></div>
            <div className="ec-summary-total"><span>Total</span><b className="ec-mono">₹8,078</b></div>
            <div className="ec-checkout-button">Proceed to checkout <ArrowRight size={13} /></div>
            <div className="ec-cart-methods"><span><CreditCard size={12} /> Card</span><span><Wallet size={12} /> Wallet</span><span><LandmarkIcon /> Bank</span></div>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

function LandmarkIcon() {
  return <Building2 size={12} />;
}

export function PaymentVisual() {
  return (
    <div className="ec-dashboard ec-payment-dashboard" role="img" aria-label="Payment integration interface showing checkout steps, masked card payment, digital payment options, transaction status and order confirmation using sample data">
      <Window title="Checkout / payment" meta="sample transaction" className="ec-payment-window">
        <div className="ec-payment-steps"><span className="is-done"><Check size={12} /> Delivery</span><span className="is-active"><CreditCard size={12} /> Payment</span><span><Package size={12} /> Review</span></div>
        <div className="ec-payment-layout">
          <div className="ec-payment-methods">
            <PanelLabel>Choose payment method</PanelLabel>
            <div className="ec-pay-option is-active"><CreditCard size={15} /><span>Card</span><small>Visa · Mastercard</small><Check size={13} /></div>
            <div className="ec-pay-option"><Wallet size={15} /><span>Wallet</span><small>Digital wallet</small></div>
            <div className="ec-pay-option"><Building2 size={15} /><span>Bank transfer</span><small>Net banking</small></div>
            <div className="ec-pay-option"><Globe2 size={15} /><span>UPI</span><small>Instant payment</small></div>
            <div className="ec-card-form"><span>Card number</span><b className="ec-mono">···· ···· ···· 4242</b><div><span>Expiry</span><span className="ec-mono">··/··</span><span>CVV</span><span className="ec-mono">···</span></div></div>
          </div>
          <div className="ec-payment-status">
            <PanelLabel>Transaction status</PanelLabel>
            <div className="ec-pay-status-row"><span>Cart total</span><b className="ec-mono">₹8,078</b></div>
            <div className="ec-pay-status-row"><span>Payment request</span><span className="ec-badge is-cyan">sent</span></div>
            <div className="ec-pay-status-row"><span>Gateway response</span><span className="ec-badge is-green">authorized</span></div>
            <div className="ec-pay-status-row"><span>Order</span><span className="ec-mono">#1048</span></div>
            <div className="ec-confirmation"><CircleCheckIcon /><span><strong>Order confirmed</strong><small>Confirmation sent · sample</small></span></div>
          </div>
        </div>
        <div className="ec-payment-chart">
          <PanelLabel>Payment dashboard</PanelLabel>
          <TinyChart line={conversionLine} fillId="ecPaymentChart" tone="violet" />
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

function CircleCheckIcon() {
  return <span className="ec-confirmation-icon"><Check size={14} /></span>;
}

export function FeatureVisual({ id }: { id: string }) {
  switch (id) {
    case "product-catalog":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Catalog structure</PanelLabel>
          <div className="ec-feature-products"><ProductThumb icon={<Shirt size={14} />} tone="cyan" /><ProductThumb icon={<Headphones size={14} />} tone="violet" /><ProductThumb icon={<Lamp size={14} />} tone="amber" /></div>
          <StatusLine label="Categories" value="14 active" />
          <StatusLine label="Variants" value="configured" state="run" />
        </div>
      );
    case "search-filter":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Product discovery</PanelLabel>
          <div className="ec-search-bar"><Search size={13} /><span>Search products</span><SlidersHorizontal size={13} /></div>
          <div className="ec-filter-chips"><span>Category</span><span>Price</span><span>Brand</span><span>Size</span></div>
          <StatusLine label="Results" value="28 products" state="run" />
        </div>
      );
    case "cart":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Cart state</PanelLabel>
          <div className="ec-cart-line"><ProductThumb icon={<ShoppingBag size={13} />} tone="cyan" /><span>3 items</span><b className="ec-mono">₹7,397</b></div>
          <ResourceRow name="Cart completion" value={64} detail="sample" />
        </div>
      );
    case "checkout":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Checkout steps</PanelLabel>
          <div className="ec-cap-flow"><span>Delivery</span><span className="is-active">Payment</span><span>Review</span></div>
          <StatusLine label="Order summary" value="ready" />
          <StatusLine label="Customer details" value="captured" state="run" />
        </div>
      );
    case "payments":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Payment methods</PanelLabel>
          <div className="ec-pay-icons"><CreditCard size={15} /><Wallet size={15} /><Building2 size={15} /><Globe2 size={15} /></div>
          <StatusLine label="Gateway" value="connected" />
          <StatusLine label="Transaction" value="authorized" state="run" />
        </div>
      );
    case "orders":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Order queue</PanelLabel>
          <OrderRow id="#1048" customer="A. Sharma" status="paid" value="₹5,198" />
          <OrderRow id="#1047" customer="R. Verma" status="pending" value="₹2,199" />
          <OrderRow id="#1046" customer="S. Kaur" status="packed" value="₹1,299" />
        </div>
      );
    case "customers":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Customer accounts</PanelLabel>
          <MiniNode icon={<UserRoundCog size={14} />} label="A. Sharma" meta="2 orders" />
          <MiniNode icon={<UserRoundCog size={14} />} label="R. Verma" meta="1 order" tone="blue" />
          <MiniNode icon={<UserRoundCog size={14} />} label="S. Kaur" meta="new" tone="green" />
        </div>
      );
    case "inventory":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Inventory status</PanelLabel>
          <ResourceRow name="Apparel" value={78} detail="in stock" />
          <ResourceRow name="Audio" value={42} tone="blue" detail="low" />
          <ResourceRow name="Home" value={64} tone="violet" detail="in stock" />
        </div>
      );
    case "analytics":
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Store performance</PanelLabel>
          <TinyChart line={revenueLine} fillId={`ecFeatureChart-${id}`} />
          <div className="ec-mini-stats"><span><b>486</b> orders</span><span><b>₹8.4L</b> revenue</span><span><b>1,204</b> customers</span></div>
        </div>
      );
    default:
      return (
        <div className="ec-feature-visual">
          <PanelLabel>Admin console</PanelLabel>
          <StatusLine label="Products" value="128 active" />
          <StatusLine label="Orders" value="12 pending" state="run" />
          <StatusLine label="Store settings" value="configured" />
        </div>
      );
  }
}

export function FeatureFlowVisual() {
  const steps = [
    ["Products", Package],
    ["Shopping Cart", ShoppingCart],
    ["Checkout", ClipboardCheck],
    ["Payment", CreditCard],
    ["Order", Truck],
    ["Customer", UsersRound],
    ["Analytics", BarChart3],
  ] as const;
  return (
    <div className="ec-feature-flow" role="img" aria-label="Ecommerce functionality flow from products through shopping cart, checkout, payment, order, customer and analytics">
      {steps.map(([label, Icon], index) => (
        <div className="ec-feature-node" key={label}>
          <span className="ec-feature-icon"><Icon size={16} /></span>
          <strong>{label}</strong>
          {index < steps.length - 1 ? <ArrowRight size={14} className="ec-feature-arrow" /> : null}
        </div>
      ))}
    </div>
  );
}

function WholesalePortalVisual() {
  return (
    <div className="ec-dashboard ec-model-dashboard" role="img" aria-label="Wholesale ecommerce portal with business account pricing and bulk ordering using sample data">
      <Window title="Wholesale portal / account" meta="sample pricing" className="ec-model-window" dense>
        <B2BPortalVisual />
      </Window>
      <IllustrationNote />
    </div>
  );
}

function B2CStorePreview() {
  return (
    <div className="ec-dashboard ec-model-dashboard" role="img" aria-label="B2C online store with product discovery and cart using sample data">
      <Window title="B2C store / discovery" meta="sample catalog" className="ec-model-window" dense>
        <B2CStoreVisual />
      </Window>
      <IllustrationNote />
    </div>
  );
}

function CustomCommerceVisual() {
  return (
    <div className="ec-dashboard ec-model-dashboard" role="img" aria-label="Custom commerce workflow dashboard with product structures, orders and integrations using sample data">
      <Window title="Custom commerce / workflows" meta="sample" className="ec-model-window" dense>
        <div className="ec-model-custom">
          <MiniNode icon={<Layers3 size={14} />} label="Product structure" meta="configured" />
          <MiniNode icon={<Workflow size={14} />} label="Order workflow" meta="connected" tone="blue" />
          <MiniNode icon={<Plug size={14} />} label="Integrations" meta="active" tone="green" />
          <div className="ec-cap-flow"><span>Catalog</span><span>Cart</span><span className="is-active">Fulfilment</span></div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function BusinessModelVisual({ id }: { id: string }) {
  switch (id) {
    case "retail-stores":
      return <OnlineStoreVisual />;
    case "wholesale":
      return <WholesalePortalVisual />;
    case "marketplace":
      return <MarketplaceVisual />;
    case "b2b":
      return <WholesalePortalVisual />;
    case "b2c":
      return <B2CStorePreview />;
    default:
      return <CustomCommerceVisual />;
  }
}

function WorkflowIcon({ kind }: { kind: string }) {
  const icons: Record<string, React.ReactNode> = {
    discovery: <Search size={15} />,
    selection: <Package size={15} />,
    cart: <ShoppingCart size={15} />,
    checkout: <ClipboardCheck size={15} />,
    payment: <CreditCard size={15} />,
    orders: <Truck size={15} />,
    admin: <LayoutDashboard size={15} />,
  };
  return <div className="ec-workflow-mini" aria-hidden="true"><span>{icons[kind] ?? <Store size={15} />}</span><i /><i /></div>;
}

export function WorkflowMiniVisual({ kind }: { kind: string }) {
  return <WorkflowIcon kind={kind} />;
}

export function AnalyticsVisual() {
  return (
    <div className="ec-dashboard ec-analytics-dashboard" role="img" aria-label="Ecommerce analytics dashboard with store overview, revenue chart, orders, product performance, customer information and inventory using illustrative sample data">
      <Window title="Store analytics / overview" meta="sample data" className="ec-analytics-window">
        <div className="ec-store-metrics ec-analytics-metrics">
          <Metric label="Sessions" value="18,420" note="sample" />
          <Metric label="Orders" value="486" tone="blue" note="sample" />
          <Metric label="Revenue" value="₹8.4L" tone="violet" note="sample" />
          <Metric label="Avg. order" value="₹1,729" tone="green" note="sample" />
        </div>
        <div className="ec-monitor-main">
          <div className="ec-monitor-chart">
            <div className="ec-chart-head"><span>Revenue &amp; orders</span><span className="ec-mono">30 days · sample</span></div>
            <TinyChart line={revenueLine} fillId="ecAnalyticsRevenue" />
            <div className="ec-chart-legend"><span><i className="is-cyan" />Revenue</span><span><i className="is-violet" />Orders</span></div>
          </div>
          <div className="ec-monitor-resources">
            <PanelLabel>Product performance</PanelLabel>
            <ResourceRow name="Linen Shirt" value={72} detail="142 units" />
            <ResourceRow name="Studio Headset" value={48} tone="blue" detail="96 units" />
            <ResourceRow name="Desk Lamp" value={36} tone="violet" detail="71 units" />
          </div>
        </div>
        <div className="ec-monitor-bottom">
          <div>
            <PanelLabel>Order status</PanelLabel>
            <StatusLine label="Paid" value="318" />
            <StatusLine label="Processing" value="96" state="run" />
            <StatusLine label="Pending" value="08" state="warn" />
          </div>
          <div>
            <PanelLabel>Inventory</PanelLabel>
            <StatusLine label="In stock" value="104" />
            <StatusLine label="Low stock" value="12" state="warn" />
            <StatusLine label="Out of stock" value="04" state="run" />
          </div>
          <div className="ec-monitor-donut">
            <svg viewBox="0 0 90 90" aria-hidden="true">
              <circle cx="45" cy="45" r="32" className="ec-donut-bg" />
              <circle cx="45" cy="45" r="32" className="ec-donut-value" strokeDasharray="150 201" />
            </svg>
            <span>72<small>% sample</small></span>
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function UxJourneyVisual() {
  const steps = [
    ["Store homepage", Store, "Brand & navigation"],
    ["Product discovery", Search, "Search & filters"],
    ["Product details", Package, "Options & pricing"],
    ["Shopping cart", ShoppingCart, "Review items"],
    ["Checkout", ClipboardCheck, "Details & payment"],
    ["Order confirmation", Check, "Order status"],
  ] as const;
  return (
    <div className="ec-ux-journey" role="img" aria-label="Ecommerce customer journey from store homepage through product discovery, product details, cart, checkout and order confirmation">
      {steps.map(([label, Icon, note], index) => {
        const JourneyIcon = Icon as React.ComponentType<{ size?: number }>;
        return (
          <div className={`ec-ux-step${index === 1 ? " is-active" : ""}`} key={label}>
            <span className="ec-ux-icon"><JourneyIcon size={16} /></span>
            <strong>{label}</strong>
            <small>{note}</small>
            {index < steps.length - 1 ? <ArrowRight size={13} className="ec-ux-arrow" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function IntegrationEcosystemVisual() {
  const nodes = [
    ["Payment", CreditCard],
    ["CRM", UsersRound],
    ["ERP", Boxes],
    ["Inventory", Package],
    ["Shipping", Truck],
    ["Analytics", BarChart3],
    ["Business apps", Workflow],
    ["APIs", Code2],
  ] as const;
  return (
    <div className="ec-ecosystem" role="img" aria-label="Ecommerce integration ecosystem connecting the store with payment, CRM, ERP, inventory, shipping, analytics, business applications and APIs using sample data">
      <div className="ec-ecosystem-core">
        <Store size={20} />
        <strong>Ecommerce Platform</strong>
        <small>integration layer</small>
      </div>
      <div className="ec-ecosystem-nodes">
        {nodes.map(([label, Icon]) => {
          const NodeIcon = Icon as React.ComponentType<{ size?: number }>;
          return (
            <div className="ec-ecosystem-node" key={label}>
              <NodeIcon size={15} />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
      <div className="ec-ecosystem-foot">
        <StatusLine label="Order sync" value="active" state="run" />
        <StatusLine label="Payment events" value="connected" />
        <StatusLine label="Product data" value="8 rules" />
      </div>
      <IllustrationNote />
    </div>
  );
}

export function TechnologyVisual() {
  return (
    <div className="ec-architecture" role="img" aria-label="Ecommerce technology architecture showing custom storefront, platform interfaces, application services, database, APIs and integrations">
      <div className="ec-architecture-grid">
        {[
          ["Storefront", Store],
          ["Platform UI", ShoppingBag],
          ["App services", Boxes],
          ["Database", Database],
          ["APIs", Code2],
          ["Integrations", Plug],
        ].map(([label, Icon], index) => {
          const TechIcon = Icon as React.ComponentType<{ size?: number }>;
          return (
            <div className="ec-architecture-node" key={label as string}>
              <span className="ec-architecture-icon"><TechIcon size={16} /></span>
              <strong>{label as string}</strong>
              <small>{index === 0 ? "custom" : index === 1 ? "platform" : index === 5 ? "connected" : "service"}</small>
              {index < 5 ? <ArrowRight size={14} className="ec-architecture-arrow" /> : null}
            </div>
          );
        })}
      </div>
      <div className="ec-tech-previews">
        <div><PanelLabel>Custom storefront</PanelLabel><div className="ec-tech-preview"><ProductThumb icon={<Shirt size={13} />} tone="cyan" /><ProductThumb icon={<Watch size={13} />} tone="blue" /><ProductThumb icon={<Lamp size={13} />} tone="amber" /></div></div>
        <div><PanelLabel>Platform-style interface</PanelLabel><StatusLine label="Theme" value="customized" /><StatusLine label="Products" value="organized" state="run" /></div>
        <div><PanelLabel>Ecommerce backend</PanelLabel><StatusLine label="Orders" value="structured" /><StatusLine label="Inventory" value="tracked" state="run" /></div>
      </div>
      <IllustrationNote />
    </div>
  );
}

export function IndustriesVisual() {
  return (
    <div className="ec-industries-visual" aria-hidden="true">
      <Window title="Industry storefronts / catalog" meta="sample" className="ec-industries-window" dense>
        <div className="ec-industries-visual-grid">
          <PanelLabel>Product presentation</PanelLabel>
          <div className="ec-product-grid is-small">
            <ProductThumb icon={<Shirt size={13} />} tone="cyan" label="Fashion" />
            <ProductThumb icon={<Headphones size={13} />} tone="violet" label="Electronics" />
            <ProductThumb icon={<Lamp size={13} />} tone="amber" label="Home" />
            <ProductThumb icon={<HeartPulse size={13} />} tone="green" label="Health" />
          </div>
        </div>
      </Window>
    </div>
  );
}

export function WhyVisual() {
  return (
    <div className="ec-why-visual" role="img" aria-label="Layered ecommerce interfaces showing a storefront, order management and sales analytics with sample data">
      <div className="ec-why-stack">
        <Window title="Storefront / customer view" meta="sample store" className="ec-why-window-main">
          <StorefrontPreview compact />
          <div className="ec-why-status"><StatusLine label="Products" value="128 active" /><StatusLine label="Cart" value="3 items" state="run" /></div>
        </Window>
        <Window title="Order management" meta="sample" className="ec-why-window-small" dense>
          <div className="ec-why-deploy">
            <OrderRow id="#1048" customer="A. Sharma" status="paid" value="₹5,198" />
            <OrderRow id="#1047" customer="R. Verma" status="pending" value="₹2,199" />
          </div>
        </Window>
        <div className="ec-why-float">
          <span><Activity size={14} /> Revenue</span>
          <TinyChart line={conversionLine} fillId="ecWhyChart" />
        </div>
      </div>
      <IllustrationNote />
    </div>
  );
}

function ProcessIcon({ kind }: { kind: string }) {
  const icons: Record<string, React.ReactNode> = {
    discovery: <Sparkles size={15} />,
    requirements: <ClipboardCheck size={15} />,
    architecture: <Network size={15} />,
    design: <LayoutDashboard size={15} />,
    development: <Code2 size={15} />,
    testing: <Check size={15} />,
    deployment: <Cloud size={15} />,
    support: <LifeBuoy size={15} />,
  };
  return <div className="ec-process-mini" aria-hidden="true"><span>{icons[kind] ?? <Store size={15} />}</span><i /><i /><i /></div>;
}

export function ProcessMiniVisual({ kind }: { kind: string }) {
  return <ProcessIcon kind={kind} />;
}

export function SecurityVisual() {
  return (
    <div className="ec-dashboard ec-security-dashboard" role="img" aria-label="Ecommerce security and data management diagram showing authentication, customer accounts, role permissions, order data and API access with sample configuration">
      <Window title="Security & data / overview" meta="sample configuration" className="ec-security-window">
        <div className="ec-security-grid">
          <div className="ec-security-zones">
            <PanelLabel>Access controls</PanelLabel>
            <div className="ec-zone is-public"><span>Authentication</span><small>Customer sign in</small></div>
            <div className="ec-zone is-app"><span>Role-based access</span><small>Admin & staff</small></div>
            <div className="ec-zone is-data"><span>Order data</span><small>Structured records</small></div>
            <div className="ec-zone-note"><LockKeyhole size={13} /> Controls defined to agreed scope</div>
          </div>
          <div className="ec-security-matrix">
            <PanelLabel>Permission matrix</PanelLabel>
            <div className="ec-matrix-row is-head"><span>Role</span><span>Catalog</span><span>Orders</span><span>Payments</span></div>
            {[
              ["Customer", "view", "own", "checkout"],
              ["Support", "view", "manage", "view"],
              ["Admin", "manage", "manage", "manage"],
            ].map(([role, catalog, orders, payments]) => (
              <div className="ec-matrix-row" key={role}>
                <span>{role}</span><span>{catalog}</span><span>{orders}</span><span>{payments}</span>
              </div>
            ))}
          </div>
          <div className="ec-security-ops">
            <PanelLabel>Data management</PanelLabel>
            <StatusLine label="Validation rules" value="configured" />
            <StatusLine label="API access" value="reviewed" state="run" />
            <StatusLine label="Customer records" value="structured" />
            <StatusLine label="Security testing" value="planned" state="warn" />
          </div>
        </div>
      </Window>
      <IllustrationNote />
    </div>
  );
}

export function BenefitsVisual() {
  return (
    <div className="ec-benefits-visual" role="img" aria-label="Before and after comparison of disconnected selling processes and a centralized ecommerce platform">
      <div className="ec-before">
        <div className="ec-benefit-head"><span className="ec-tag is-amber">Before</span><strong>Disconnected selling</strong></div>
        <div className="ec-before-list">
          <span>Limited online presence</span>
          <span>Manual product management</span>
          <span>Disconnected shopping workflows</span>
          <span>Manual order handling</span>
          <span>Separate business systems</span>
        </div>
        <div className="ec-before-console"><FileText size={13} /><span>spreadsheets &amp; separate tools</span><span className="ec-mono">manual</span></div>
      </div>
      <div className="ec-benefit-arrow"><ArrowRight size={20} /></div>
      <div className="ec-after">
        <div className="ec-benefit-head"><span className="ec-tag is-cyan">After</span><strong>Centralized ecommerce platform</strong></div>
        <div className="ec-after-grid">
          <MiniNode icon={<Store size={14} />} label="Digital storefront" meta="online" />
          <MiniNode icon={<ShoppingCart size={14} />} label="Integrated shopping" meta="connected" tone="blue" />
          <MiniNode icon={<CreditCard size={14} />} label="Checkout & payments" meta="workflow" tone="green" />
          <MiniNode icon={<BarChart3 size={14} />} label="Store dashboard" meta="reporting" tone="violet" />
        </div>
        <div className="ec-after-status"><StatusLine label="Product catalog" value="organized" /><StatusLine label="Order management" value="centralized" state="run" /></div>
      </div>
      <IllustrationNote>Conceptual workflow comparison · illustrative</IllustrationNote>
    </div>
  );
}

export function CtaVisual() {
  return (
    <div className="ec-cta-visual" aria-hidden="true">
      <div className="ec-cta-window ec-cta-window-one">
        <span className="ec-window-title">Storefront overview</span>
        <div className="ec-cta-products"><ProductThumb icon={<Shirt size={13} />} tone="cyan" /><ProductThumb icon={<Headphones size={13} />} tone="violet" /><ProductThumb icon={<Lamp size={13} />} tone="amber" /></div>
      </div>
      <div className="ec-cta-window ec-cta-window-two">
        <span className="ec-window-title">Shopping cart</span>
        <div className="ec-cap-flow"><span>Products</span><span className="is-active">Cart</span><span>Checkout</span></div>
      </div>
      <div className="ec-cta-window ec-cta-window-three">
        <span className="ec-window-title">Payment &amp; orders</span>
        <StatusLine label="Payment" value="authorized" />
        <StatusLine label="Order" value="#1048" state="run" />
      </div>
      <div className="ec-cta-orbit"><span /><span /><span /><span /></div>
    </div>
  );
}

export const industryIcons: Record<string, React.ReactNode> = {
  fashion: <Shirt size={17} />,
  electronics: <Headphones size={17} />,
  beauty: <Sparkles size={17} />,
  home: <Lamp size={17} />,
  grocery: <ShoppingBag size={17} />,
  health: <HeartPulse size={17} />,
  sports: <Dumbbell size={17} />,
  jewelry: <Gem size={17} />,
  retail: <Store size={17} />,
  wholesale: <Boxes size={17} />,
  consumer: <ShoppingCart size={17} />,
  b2b: <BriefcaseBusiness size={17} />,
};
