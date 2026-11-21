import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, Search, Clock, MapPin, Phone, MessageCircle, 
  ChevronRight, Plus, Minus, X, Check, AlertCircle, Sparkles, 
  Store, Truck, CreditCard, DollarSign, Info
} from 'lucide-react';
import { menuCategories, menuItems } from './data/menu';
import { MenuItem, CartItem, CartCustomization, OptionItem, PaymentMethod, OrderType } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(menuCategories[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  // Checkout modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Pix');
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      if (searchQuery.trim() !== '') {
        return matchesSearch;
      }
      return matchesCategory;
    });
  }, [selectedCategory, searchQuery]);

  const cartTotalCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
  }, [cart]);

  const handleAddToCart = (cartItem: CartItem) => {
    setCart(prev => [...prev, cartItem]);
    setActiveModalItem(null);
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart(prev => prev.map(ci => {
      if (ci.cartItemId === cartItemId) {
        const newQty = ci.quantity + delta;
        if (newQty <= 0) return null;
        const unitBase = ci.totalPrice / ci.quantity;
        return {
          ...ci,
          quantity: newQty,
          totalPrice: unitBase * newQty
        };
      }
      return ci;
    }).filter(Boolean) as CartItem[]);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Por favor, preencha seu Nome e Telefone/WhatsApp.');
      return;
    }
    if (orderType === 'delivery' && (!deliveryAddress.trim() || !neighborhood.trim())) {
      alert('Por favor, informe o Endereço e Bairro para entrega.');
      return;
    }

    // Build WhatsApp message
    const waNumber = '5583996914304';
    let message = `*NOVO PEDIDO - K_AÇAIETERIA*\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    message += `📱 *Telefone:* ${customerPhone}\n`;
    message += `🛍️ *Tipo de Pedido:* ${orderType === 'delivery' ? 'Entrega (Delivery)' : 'Retirada no Local'}\n`;
    
    if (orderType === 'delivery') {
      message += `📍 *Endereço:* ${deliveryAddress}, Bairro: ${neighborhood}\n`;
      message += `💰 *Taxa de Entrega:* À consultar\n`;
    } else {
      message += `📍 *Endereço de Retirada:* Rua Coelho Paiva 26 - Mandacaru\n`;
    }
    
    message += `💳 *Forma de Pagamento:* ${paymentMethod}\n\n`;
    message += `------------------------------------\n`;
    message += `*ITENS DO PEDIDO:*\n`;

    cart.forEach((ci, idx) => {
      message += `\n${idx + 1}. *${ci.quantity}x ${ci.item.name}*`;
      if (ci.customization.selectedSize) {
        message += ` (${ci.customization.selectedSize.name})`;
      }
      message += ` - R$ ${ci.totalPrice.toFixed(2).replace('.', ',')}\n`;

      if (ci.customization.selectedFlavors && ci.customization.selectedFlavors.length > 0) {
        message += `   • *Sabores/Opções:* ${ci.customization.selectedFlavors.map(f => f.name).join(', ')}\n`;
      }

      ci.customization.selectedRules.forEach(rule => {
        if (rule.selectedOptions.length > 0) {
          message += `   • *${rule.ruleTitle}:* ${rule.selectedOptions.map(o => o.name).join(', ')}\n`;
        }
      });

      if (ci.customization.selectedAdditions.length > 0) {
        message += `   • *Adicionais:* ${ci.customization.selectedAdditions.map(a => `${a.name} (+R$ ${a.price.toFixed(2)})`).join(', ')}\n`;
      }

      if (ci.customization.observations) {
        message += `   • *Obs:* ${ci.customization.observations}\n`;
      }
    });

    message += `\n------------------------------------\n`;
    message += `*TOTAL DOS ITENS: R$ ${cartSubtotal.toFixed(2).replace('.', ',')}*\n`;
    if (orderType === 'delivery') {
      message += `*(Taxa de entrega será confirmada no atendimento)*\n`;
    }
    message += `\n*Pedido feito através do Cardápio Online K_Açaíteria*`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setOrderSuccess(true);
  };

  return (
    <div className="min-h-screen bg-purple-950 text-slate-100 font-sans pb-24">
      {/* HEADER & BRANDING */}
      <header className="relative bg-gradient-to-b from-purple-900 via-purple-950 to-purple-950 border-b border-purple-800/60 shadow-2xl overflow-hidden">
        {/* Decorative glowing background circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 right-0 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo & Title with Rich Purple Background */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-purple-950 border-2 border-purple-500 shadow-xl shadow-purple-900/50 overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://i.postimg.cc/T3H2GS8q/Whats-App-Image-2026-11-21-at-03-32-16.jpg" 
                  alt="K_Açaíteria Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
                  K_Açaíteria <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                </h1>
                <p className="text-purple-200 text-sm md:text-base font-medium mt-1">
                  O verdadeiro sabor do açaí, sorvetes e delícias geladas!
                </p>
                <p className="text-pink-300 text-xs mt-1 font-semibold flex items-center justify-center md:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Retirada: Rua Coelho Paiva 26 - Mandacaru
                </p>
              </div>
            </div>

            {/* Hours & Info Badge */}
            <div className="bg-purple-900/60 border border-purple-700/50 backdrop-blur-md rounded-2xl p-4 shadow-lg text-xs md:text-sm space-y-1.5 w-full md:w-auto">
              <div className="flex items-center gap-2 text-purple-200">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <span><strong>Loja:</strong> Seg a Dom 17:30 às 22:00</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Truck className="w-4 h-4 text-pink-400 shrink-0" />
                <span><strong>Retirada / Entrega:</strong> 17:30 às 00:00</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span><strong>Taxa de Entrega:</strong> À consultar</span>
              </div>
            </div>

          </div>

          {/* SEARCH BAR */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-purple-300" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="O que você deseja pedir hoje? (ex: Açaí 500ml, Empada, Big Ninho...)"
              className="w-full pl-12 pr-4 py-3.5 bg-purple-900/70 border border-purple-600/60 rounded-2xl text-white placeholder-purple-300/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-inner text-sm md:text-base transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-purple-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* CATEGORIES NAVIGATION */}
      {!searchQuery && (
        <nav className="sticky top-0 z-30 bg-purple-950/90 backdrop-blur-md border-b border-purple-800/60 shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
              {menuCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-600/30 ring-2 ring-pink-400/50 scale-105'
                        : 'bg-purple-900/60 text-purple-200 hover:bg-purple-800/80 hover:text-white border border-purple-700/40'
                    }`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-purple-200">
              Resultados para "{searchQuery}"
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs bg-purple-900 hover:bg-purple-800 text-purple-300 px-3 py-1.5 rounded-lg border border-purple-700 transition"
            >
              Limpar busca
            </button>
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-purple-900/30 rounded-2xl border border-purple-800/50 p-8">
            <AlertCircle className="w-12 h-12 text-pink-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Nenhum item encontrado</h3>
            <p className="text-purple-300 text-sm">Tente buscar por outro termo ou navegue pelas categorias acima.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const displayPrice = item.price !== undefined ? item.price : (item.sizes ? item.sizes[0].price : 0);
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveModalItem(item)}
                  className="group bg-purple-900/40 hover:bg-purple-900/70 border border-purple-800/60 hover:border-pink-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Item Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-purple-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      {/* Highly visible price badge */}
                      <span className="bg-pink-600 text-white font-black text-sm px-3 py-1.5 rounded-xl shadow-lg ring-2 ring-pink-400/40">
                        R$ {displayPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="bg-purple-900/90 backdrop-blur-sm text-purple-200 text-xs px-2.5 py-1 rounded-lg border border-purple-700 font-semibold">
                        {item.sizes ? 'Tamanho único' : 'Pronto'}
                      </span>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-purple-300 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-purple-800/60 flex items-center justify-between">
                      <span className="text-xs text-pink-400 font-bold uppercase tracking-wider">Montar & Pedir</span>
                      <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white p-2.5 rounded-xl shadow-md group-hover:scale-105 transition">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* FLOAT CART BUTTON */}
      {cartTotalCount > 0 && (
        <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
          <button
            onClick={() => setIsCartOpen(true)}
            className="pointer-events-auto bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl flex items-center gap-4 transform hover:scale-105 transition-all duration-300 ring-4 ring-pink-500/30"
          >
            <div className="bg-white/20 p-2 rounded-xl">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Ver Carrinho</div>
              <div className="text-base font-extrabold">{cartTotalCount} {cartTotalCount === 1 ? 'item' : 'itens'} • R$ {cartSubtotal.toFixed(2).replace('.', ',')}</div>
            </div>
            <div className="ml-4 bg-white text-purple-900 px-3 py-1.5 rounded-xl text-sm font-black shadow">
              Pedir
            </div>
          </button>
        </div>
      )}

      {/* ITEM CUSTOMIZATION MODAL */}
      {activeModalItem && (
        <ItemModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
          onAdd={handleAddToCart}
        />
      )}

      {/* CART DRAWER / MODAL */}
      {isCartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateQty={updateQuantity}
          onOpenCheckout={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
          subtotal={cartSubtotal}
        />
      )}

      {/* CHECKOUT MODAL */}
      {isCheckoutOpen && (
        <CheckoutModal
          cart={cart}
          subtotal={cartSubtotal}
          onClose={() => setIsCheckoutOpen(false)}
          onSubmit={handleCheckoutSubmit}
          orderType={orderType}
          setOrderType={setOrderType}
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerPhone={customerPhone}
          setCustomerPhone={setCustomerPhone}
          deliveryAddress={deliveryAddress}
          setDeliveryAddress={setDeliveryAddress}
          neighborhood={neighborhood}
          setNeighborhood={setNeighborhood}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          orderSuccess={orderSuccess}
          setOrderSuccess={setOrderSuccess}
          setCart={setCart}
        />
      )}

      {/* FOOTER */}
      <footer className="mt-20 border-t border-purple-900 bg-purple-950 py-10 text-center text-xs text-purple-400 space-y-3">
        <p className="text-purple-300 font-bold text-sm">K_Açaíteria • Todos os direitos reservados</p>
        <p className="text-purple-200">📍 Endereço de Retirada: Rua Coelho Paiva 26 - Mandacaru</p>
        <p>Atendimento via WhatsApp: (83) 99691-4304</p>
        <p className="text-purple-500">Horário: Segunda a Domingo das 17:30 às 22:00 (Entregas até 00:00)</p>
      </footer>
    </div>
  );
}

// ==========================================
// ITEM CUSTOMIZATION MODAL COMPONENT
// ==========================================
interface ItemModalProps {
  item: MenuItem;
  onClose: () => void;
  onAdd: (cartItem: CartItem) => void;
}

function ItemModal({ item, onClose, onAdd }: ItemModalProps) {
  const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : undefined);
  const [selectedFlavors, setSelectedFlavors] = useState<OptionItem[]>([]);
  const [ruleSelections, setRuleSelections] = useState<{ [ruleTitle: string]: OptionItem[] }>({});
  const [selectedAdditions, setSelectedAdditions] = useState<OptionItem[]>([]);
  const [observations, setObservations] = useState<string>('');

  const unitPrice = useMemo(() => {
    let base = selectedSize ? selectedSize.price : (item.price || 0);
    selectedAdditions.forEach(add => {
      base += add.price;
    });
    Object.values(ruleSelections).forEach(opts => {
      opts.forEach(opt => {
        base += opt.price;
      });
    });
    return base;
  }, [selectedSize, item, selectedAdditions, ruleSelections]);

  const handleFlavorToggle = (flavor: OptionItem) => {
    const max = item.flavorMax || 1;
    const exists = selectedFlavors.some(f => f.id === flavor.id);
    if (exists) {
      setSelectedFlavors(prev => prev.filter(f => f.id !== flavor.id));
    } else {
      if (selectedFlavors.length >= max) {
        alert(`Você pode escolher no máximo ${max} opção(ões).`);
        return;
      }
      setSelectedFlavors(prev => [...prev, flavor]);
    }
  };

  const handleRuleOptionToggle = (ruleTitle: string, option: OptionItem, min?: number, max?: number) => {
    const currentSelected = ruleSelections[ruleTitle] || [];
    const exists = currentSelected.some(o => o.id === option.id);

    if (exists) {
      setRuleSelections(prev => ({
        ...prev,
        [ruleTitle]: currentSelected.filter(o => o.id !== option.id)
      }));
    } else {
      if (max && currentSelected.length >= max) {
        alert(`Nesta seção (${ruleTitle}), o limite máximo é de ${max} opção(ões).`);
        return;
      }
      setRuleSelections(prev => ({
        ...prev,
        [ruleTitle]: [...currentSelected, option]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (item.flavors && item.flavorMin && selectedFlavors.length < item.flavorMin) {
      alert(`Por favor, selecione no mínimo ${item.flavorMin} sabor(es).`);
      return;
    }

    if (item.customizationRules) {
      for (const rule of item.customizationRules) {
        const selected = ruleSelections[rule.title] || [];
        if (rule.type === 'mandatory' && rule.min && selected.length < rule.min) {
          alert(`Por favor, selecione no mínimo ${rule.min} opção(ões) em "${rule.title}".`);
          return;
        }
      }
    }

    const cartItem: CartItem = {
      cartItemId: Math.random().toString(36).substring(2, 9),
      item,
      quantity: 1,
      unitPrice,
      customization: {
        selectedSize,
        selectedRules: Object.entries(ruleSelections).map(([ruleTitle, selectedOptions]) => ({
          ruleTitle,
          selectedOptions
        })),
        selectedFlavors,
        selectedAdditions,
        observations
      },
      totalPrice: unitPrice
    };

    onAdd(cartItem);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-purple-900 border border-purple-700 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="relative h-48 w-full bg-purple-950">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-purple-950/80 hover:bg-purple-900 text-white p-2 rounded-full border border-purple-600 transition shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-black text-white">{item.name}</h2>
            {item.description && <p className="text-purple-200 text-xs mt-1">{item.description}</p>}
          </div>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* SIZES */}
          {item.sizes && item.sizes.length > 0 && (
            <div>
              <label className="block text-sm font-bold text-pink-300 mb-2">
                Opção Selecionada
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {item.sizes.map((size) => {
                  const isSelected = selectedSize?.name === size.name;
                  return (
                    <button
                      key={size.name}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-r from-pink-600 to-purple-600 border-pink-400 text-white shadow-lg'
                          : 'bg-purple-950/60 border-purple-800 text-purple-200 hover:bg-purple-800/50'
                      }`}
                    >
                      <span className="font-bold text-sm">{size.name}</span>
                      <span className="text-xs font-black mt-1 text-pink-300">R$ {size.price.toFixed(2).replace('.', ',')}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* FLAVORS */}
          {item.flavors && item.flavors.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-pink-300">
                  Sabores Disponíveis <span className="text-xs font-normal text-purple-300">(Mín {item.flavorMin || 1}, Máx {item.flavorMax || 3})</span>
                </label>
                <span className="text-xs bg-purple-950 px-2.5 py-1 rounded-lg text-purple-300 border border-purple-800">
                  {selectedFlavors.length}/{item.flavorMax || 3}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.flavors.map((flavor) => {
                  const isSelected = selectedFlavors.some(f => f.id === flavor.id);
                  return (
                    <div
                      key={flavor.id}
                      onClick={() => handleFlavorToggle(flavor)}
                      className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                        isSelected
                          ? 'bg-pink-600/30 border-pink-500 text-white shadow'
                          : 'bg-purple-950/40 border-purple-800 text-purple-200 hover:bg-purple-800/40'
                      }`}
                    >
                      <span className="text-xs font-medium pr-2">{flavor.name}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${isSelected ? 'bg-pink-600 border-pink-400 text-white' : 'border-purple-600'}`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CUSTOMIZATION RULES */}
          {item.customizationRules && item.customizationRules.map((rule) => {
            const currentSelected = ruleSelections[rule.title] || [];
            return (
              <div key={rule.title} className="bg-purple-950/40 p-4 rounded-2xl border border-purple-800/60">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-pink-300">{rule.title}</h4>
                    {rule.min !== undefined && rule.max !== undefined && (
                      <p className="text-xs text-purple-400">Escolha de {rule.min} a {rule.max} opções</p>
                    )}
                  </div>
                  <span className="text-xs bg-purple-900 px-2 py-1 rounded-lg text-purple-300 border border-purple-700">
                    {currentSelected.length} selecionados
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {rule.options.map((opt) => {
                    const isSelected = currentSelected.some(o => o.id === opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => {
                          const current = ruleSelections[rule.title] || [];
                          const exists = current.some(o => o.id === opt.id);
                          if (exists) {
                            setRuleSelections(prev => ({
                              ...prev,
                              [rule.title]: current.filter(o => o.id !== opt.id)
                            }));
                          } else {
                            if (rule.max && current.length >= rule.max) {
                              alert(`Limite máximo de ${rule.max} opções.`);
                              return;
                            }
                            setRuleSelections(prev => ({
                              ...prev,
                              [rule.title]: [...current, opt]
                            }));
                          }
                        }}
                        className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-pink-600/30 border-pink-500 text-white shadow'
                            : 'bg-purple-900/40 border-purple-800 text-purple-200 hover:bg-purple-800/50'
                        }`}
                      >
                        <div className="pr-2">
                          <span className="text-xs font-medium block">{opt.name}</span>
                          {opt.price > 0 && <span className="text-xs text-pink-400 font-bold">+R$ {opt.price.toFixed(2).replace('.', ',')}</span>}
                        </div>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${isSelected ? 'bg-pink-600 border-pink-400 text-white' : 'border-purple-600'}`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* OBSERVATIONS */}
          <div>
            <label className="block text-sm font-bold text-purple-200 mb-1.5">
              Observações do pedido <span className="text-xs text-purple-400 font-normal">(opcional)</span>
            </label>
            <textarea
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              placeholder="Ex: Tirar algum ingrediente, caprichar na calda, etc."
              rows={2}
              className="w-full p-3 bg-purple-950/60 border border-purple-800 rounded-xl text-white placeholder-purple-400 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* SUBMIT FOOTER */}
          <div className="pt-4 border-t border-purple-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-purple-300 block">Total do Item</span>
              <span className="text-2xl font-black text-pink-400">R$ {unitPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-2xl shadow-xl flex items-center gap-2 transform hover:scale-105 transition"
            >
              <span>Adicionar ao Carrinho</span>
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

// ==========================================
// CART DRAWER COMPONENT
// ==========================================
interface CartDrawerProps {
  cart: CartItem[];
  onClose: () => void;
  onUpdateQty: (cartItemId: string, delta: number) => void;
  onOpenCheckout: () => void;
  subtotal: number;
}

function CartDrawer({ cart, onClose, onUpdateQty, onOpenCheckout, subtotal }: CartDrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-purple-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-purple-900 border-l border-purple-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-purple-800 flex items-center justify-between bg-purple-950">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-pink-400" />
            <h2 className="text-lg font-bold text-white">Seu Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-purple-800 text-purple-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-purple-300 space-y-3">
              <ShoppingBag className="w-16 h-16 mx-auto opacity-30 text-pink-400" />
              <p className="font-semibold text-white">Seu carrinho está vazio</p>
              <p className="text-xs">Adicione itens deliciosos do cardápio para pedir!</p>
            </div>
          ) : (
            cart.map((ci) => (
              <div key={ci.cartItemId} className="bg-purple-950/60 p-4 rounded-2xl border border-purple-800/60 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-white text-sm">{ci.item.name}</h4>
                    {ci.customization.selectedSize && (
                      <span className="text-xs bg-purple-900 text-pink-300 px-2 py-0.5 rounded border border-purple-700 inline-block mt-1">
                        {ci.customization.selectedSize.name}
                      </span>
                    )}
                  </div>
                  <span className="font-black text-pink-400 text-base">
                    R$ {ci.totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {(ci.customization.selectedFlavors?.length || 0) > 0 && (
                  <div className="text-xs text-purple-300">
                    <strong>Sabores:</strong> {ci.customization.selectedFlavors?.map(f => f.name).join(', ')}
                  </div>
                )}

                {ci.customization.selectedRules.map(rule => rule.selectedOptions.length > 0 && (
                  <div key={rule.ruleTitle} className="text-xs text-purple-300">
                    <strong>{rule.ruleTitle}:</strong> {rule.selectedOptions.map(o => o.name).join(', ')}
                  </div>
                ))}

                {ci.customization.selectedAdditions.length > 0 && (
                  <div className="text-xs text-purple-300">
                    <strong>Adicionais:</strong> {ci.customization.selectedAdditions.map(a => a.name).join(', ')}
                  </div>
                )}

                {ci.customization.observations && (
                  <div className="text-xs text-pink-300 italic">
                    Obs: "{ci.customization.observations}"
                  </div>
                )}

                {/* Quantity Controls */}
                <div className="flex items-center justify-between pt-2 border-t border-purple-800/50">
                  <span className="text-xs text-purple-400">Quantidade</span>
                  <div className="flex items-center gap-3 bg-purple-900 px-3 py-1 rounded-xl border border-purple-700">
                    <button
                      onClick={() => onUpdateQty(ci.cartItemId, -1)}
                      className="text-purple-300 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-sm text-white">{ci.quantity}</span>
                    <button
                      onClick={() => onUpdateQty(ci.cartItemId, 1)}
                      className="text-purple-300 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-purple-800 bg-purple-950 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-purple-300">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-sm text-purple-300">
                <span>Taxa de Entrega</span>
                <span className="text-pink-400 font-semibold">À consultar</span>
              </div>
              <div className="flex justify-between text-lg font-black text-white pt-2 border-t border-purple-800">
                <span>Total estimado</span>
                <span className="text-pink-400">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-2 transform hover:scale-[1.02] transition"
            >
              <span>Continuar para Pagamento</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// ==========================================
// CHECKOUT MODAL COMPONENT
// ==========================================
interface CheckoutModalProps {
  cart: CartItem[];
  subtotal: number;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  orderType: OrderType;
  setOrderType: (t: OrderType) => void;
  customerName: string;
  setCustomerName: (v: string) => void;
  customerPhone: string;
  setCustomerPhone: (v: string) => void;
  deliveryAddress: string;
  setDeliveryAddress: (v: string) => void;
  neighborhood: string;
  setNeighborhood: (v: string) => void;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (p: PaymentMethod) => void;
  orderSuccess: boolean;
  setOrderSuccess: (s: boolean) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

function CheckoutModal({
  cart,
  subtotal,
  onClose,
  onSubmit,
  orderType,
  setOrderType,
  customerName,
  setCustomerName,
  customerPhone,
  setCustomerPhone,
  deliveryAddress,
  setDeliveryAddress,
  neighborhood,
  setNeighborhood,
  paymentMethod,
  setPaymentMethod,
  orderSuccess,
  setOrderSuccess,
  setCart
}: CheckoutModalProps) {
  if (orderSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/90 backdrop-blur-md">
        <div className="bg-purple-900 border border-purple-700 w-full max-w-md rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-4xl border-2 border-green-500">
            ✅
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white">Pedido Encaminhado!</h2>
            <p className="text-purple-200 text-sm leading-relaxed">
              Você foi redirecionado para o WhatsApp da <strong>K_Açaíteria</strong> (+55 83 99691‑4304) com todos os detalhes do seu pedido.
            </p>
          </div>
          <button
            onClick={() => {
              setCart([]);
              setOrderSuccess(false);
              onClose();
            }}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl hover:opacity-90 transition"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-purple-900 border border-purple-700 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-purple-800 flex items-center justify-between bg-purple-950">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-green-400" /> Finalizar Pedido via WhatsApp
          </h2>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-purple-800 text-purple-300 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={onSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Order Type */}
          <div>
            <label className="block text-sm font-bold text-pink-300 mb-2">Tipo de Atendimento</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`p-3 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition ${
                  orderType === 'delivery'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 border-pink-400 text-white shadow-lg'
                    : 'bg-purple-950/60 border-purple-800 text-purple-200 hover:bg-purple-800/50'
                }`}
              >
                <Truck className="w-4 h-4" /> Entrega (Delivery)
              </button>
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`p-3 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition ${
                  orderType === 'pickup'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 border-pink-400 text-white shadow-lg'
                    : 'bg-purple-950/60 border-purple-800 text-purple-200 hover:bg-purple-800/50'
                }`}
              >
                <Store className="w-4 h-4" /> Retirada no Local
              </button>
            </div>
            {orderType === 'delivery' && (
              <p className="text-xs text-pink-400 mt-2 font-medium">⚠️ Taxa de entrega: à consultar no WhatsApp.</p>
            )}
            {orderType === 'pickup' && (
              <div className="mt-3 p-3 bg-purple-950/70 border border-purple-700 rounded-xl text-xs text-purple-200 space-y-1">
                <p className="font-bold text-pink-300">📍 Endereço para Retirada:</p>
                <p>Rua Coelho Paiva 26 - Mandacaru</p>
              </div>
            )}
          </div>

          {/* Customer Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-pink-300">Seus Dados</h3>
            <div>
              <label className="block text-xs font-semibold text-purple-200 mb-1">Nome Completo *</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                placeholder="Ex: Maria Silva"
                className="w-full p-3 bg-purple-950/60 border border-purple-800 rounded-xl text-white placeholder-purple-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-purple-200 mb-1">Telefone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={e => setCustomerPhone(e.target.value)}
                placeholder="Ex: (83) 99999-9999"
                className="w-full p-3 bg-purple-950/60 border border-purple-800 rounded-xl text-white placeholder-purple-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Delivery Address */}
          {orderType === 'delivery' && (
            <div className="space-y-4 pt-2 border-t border-purple-800/60">
              <h3 className="text-sm font-bold text-pink-300">Endereço de Entrega</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-purple-200 mb-1">Rua / Logradouro e Número *</label>
                  <input
                    type="text"
                    required={orderType === 'delivery'}
                    value={deliveryAddress}
                    onChange={e => setDeliveryAddress(e.target.value)}
                    placeholder="Ex: Rua Principal, 123"
                    className="w-full p-3 bg-purple-950/60 border border-purple-800 rounded-xl text-white placeholder-purple-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-200 mb-1">Bairro *</label>
                  <input
                    type="text"
                    required={orderType === 'delivery'}
                    value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}
                    placeholder="Ex: Centro"
                    className="w-full p-3 bg-purple-950/60 border border-purple-800 rounded-xl text-white placeholder-purple-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payment Method */}
          <div className="pt-2 border-t border-purple-800/65">
            <h3 className="text-sm font-bold text-pink-300 mb-2">Forma de Pagamento</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(['Pix', 'Dinheiro', 'Cartão de Crédito (Aproximação)', 'Cartão de Débito (Aproximação)'] as PaymentMethod[]).map((method) => {
                const isSelected = paymentMethod === method;
                return (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`p-3 rounded-xl border text-left font-medium text-xs transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-pink-600/30 border-pink-500 text-white shadow'
                        : 'bg-purple-950/40 border-purple-800 text-purple-200 hover:bg-purple-800/40'
                    }`}
                  >
                    <span>{method}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'bg-pink-600 border-pink-400' : 'border-purple-600'}`}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Order Summary & Submit */}
          <div className="pt-4 border-t border-purple-800 space-y-4">
            <div className="flex items-center justify-between text-sm text-purple-300">
              <span>Total dos Itens:</span>
              <span className="font-black text-pink-400 text-base">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-black py-4 px-6 rounded-2xl shadow-2xl flex items-center justify-center gap-3 transform hover:scale-[1.02] transition"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Enviar Pedido para WhatsApp (+55 83 99691-4304)</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
