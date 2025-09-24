import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building, Truck, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { countries, calculateTax, formatCurrency, getShippingCost, getCountryByCode } from '@/utils/taxCalculations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    country: 'IN',
    instructions: '',
  });

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
      setDiscount(0.1); // 10% discount
    } else if (promoCode.toLowerCase() === 'bulk20') {
      setDiscount(0.2); // 20% discount
    } else {
      setDiscount(0);
    }
  };

  const subtotal = state.totalPrice;
  const discountAmount = subtotal * discount;
  const shippingCost = getShippingCost(selectedCountry, subtotal);
  const taxAmount = calculateTax(subtotal - discountAmount, selectedCountry);
  const total = subtotal - discountAmount + shippingCost + taxAmount;
  const selectedCountryData = getCountryByCode(selectedCountry);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // In a real app, process payment and create order
    navigate('/order-success', {
      state: { 
        orderId: 'HT' + Date.now(), 
        total: total,
        items: state.items,
        customerInfo: formData,
        paymentMethod: paymentMethod,
        country: selectedCountryData
      }
    });
  };

  const steps = [
    { id: 1, title: 'Shipping Info', icon: Truck },
    { id: 2, title: 'Payment', icon: CreditCard },
    { id: 3, title: 'Review', icon: Lock },
  ];

  return (
    <div className="min-h-screen">
      <Navigation cartCount={state.totalItems} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Checkout
            </h1>
            
            {/* Progress Steps */}
            <div className="flex items-center space-x-4 mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-muted text-muted-foreground'
                  }`}>
                    <step.icon size={16} />
                  </div>
                  <span className={`ml-2 font-nunito font-semibold ${
                    currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-primary">Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="form-input"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="form-input"
                          placeholder="+91 97893 42841"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Complete Address</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="form-input"
                        placeholder="House/Flat No, Street, Area"
                        rows={3}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select 
                          value={selectedCountry} 
                          onValueChange={(value) => {
                            setSelectedCountry(value);
                            handleInputChange('country', value);
                          }}
                        >
                          <SelectTrigger className="form-input">
                            <Globe size={16} className="mr-2" />
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="form-input"
                          placeholder="Madurai"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="form-input"
                          placeholder="Tamil Nadu"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Postal Code</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          className="form-input"
                          placeholder="625001"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                      <Textarea
                        id="instructions"
                        value={formData.instructions}
                        onChange={(e) => handleInputChange('instructions', e.target.value)}
                        className="form-input"
                        placeholder="Any special instructions for delivery"
                        rows={2}
                      />
                    </div>

                    <Button 
                      onClick={() => setCurrentStep(2)} 
                      size="lg" 
                      className="w-full btn-hero"
                    >
                      Continue to Payment
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-primary">Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border rounded-lg">
                          <RadioGroupItem value="upi" id="upi" />
                          <Smartphone className="text-primary" size={20} />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">
                            <div className="font-semibold">UPI Payment</div>
                            <div className="text-sm text-muted-foreground">Pay using Google Pay, PhonePe, Paytm</div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <CreditCard className="text-primary" size={20} />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Credit/Debit Card</div>
                            <div className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg">
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Building className="text-primary" size={20} />
                          <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Net Banking</div>
                            <div className="text-sm text-muted-foreground">All major banks supported</div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg">
                          <RadioGroupItem value="cod" id="cod" />
                          <Truck className="text-primary" size={20} />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Cash on Delivery</div>
                            <div className="text-sm text-muted-foreground">Pay when you receive your order</div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    <div className="flex space-x-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentStep(1)}
                        size="lg"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => setCurrentStep(3)} 
                        size="lg" 
                        className="flex-1 btn-hero"
                      >
                        Review Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-primary">Review Your Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Shipping Details */}
                    <div className="space-y-2">
                      <h4 className="font-nunito font-semibold">Shipping Address</h4>
                      <div className="bg-cream p-4 rounded-lg text-sm">
                        <p className="font-semibold">{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.state} - {formData.pincode}</p>
                        <p>{formData.phone}</p>
                        <p>{formData.email}</p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-2">
                      <h4 className="font-nunito font-semibold">Payment Method</h4>
                      <div className="bg-cream p-4 rounded-lg text-sm">
                        <p className="capitalize">{paymentMethod === 'upi' ? 'UPI Payment' : 
                                                 paymentMethod === 'card' ? 'Credit/Debit Card' :
                                                 paymentMethod === 'netbanking' ? 'Net Banking' : 
                                                 'Cash on Delivery'}</p>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the <span className="text-primary underline cursor-pointer">Terms & Conditions</span> and 
                        <span className="text-primary underline cursor-pointer"> Privacy Policy</span>. 
                        I confirm that all the information provided is correct.
                      </Label>
                    </div>

                    <div className="flex space-x-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentStep(2)}
                        size="lg"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={handlePlaceOrder} 
                        size="lg" 
                        className="flex-1 btn-hero text-lg"
                      >
                        <Lock className="mr-2" size={18} />
                        Place Order - {formatCurrency(total, selectedCountry)}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-playfair text-primary">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div>
                          <p className="font-semibold">{item.name} ({item.size})</p>
                          <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">{formatCurrency(item.price * item.quantity, selectedCountry)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code Section */}
                  <div className="border-t pt-4">
                    <div className="flex gap-2 mb-3">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="form-input text-sm"
                      />
                      <Button onClick={applyPromoCode} variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                    {discount > 0 && (
                      <p className="text-green text-sm">
                        ✓ {discount * 100}% discount applied!
                      </p>
                    )}
                  </div>

                  <div className="border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{formatCurrency(subtotal, selectedCountry)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green">
                        <span>Discount ({discount * 100}%)</span>
                        <span>-{formatCurrency(discountAmount, selectedCountry)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className={shippingCost === 0 ? 'text-green' : ''}>
                        {shippingCost === 0 ? 'FREE' : formatCurrency(shippingCost, selectedCountry)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{selectedCountryData?.taxName || 'Tax'} ({Math.round((selectedCountryData?.taxRate || 0) * 100)}%)</span>
                      <span>{formatCurrency(taxAmount, selectedCountry)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">{formatCurrency(total, selectedCountry)}</span>
                    </div>
                  </div>

                  <div className="bg-cream p-3 rounded-md text-center text-sm">
                    <Lock size={16} className="inline mr-1" />
                    Secure checkout with SSL encryption
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;