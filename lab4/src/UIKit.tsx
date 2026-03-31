import React from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Alert } from './components/Alert';

export const UIKit: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">UI Kit (Component Galerisi)</h2>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">LAB-4 kapsamında oluşturulan komponent varyantları sergisi.</p>
                </div>

                <div className="flex flex-col gap-12">
                    {/* BUTTONS */}
                    <section>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 dark:border-gray-700">1. Button Varyantları (12 Adet)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="flex flex-col gap-3 items-start">
                                <span className="text-sm font-medium text-gray-500">Primary (sm, md, lg)</span>
                                <Button variant="primary" size="sm">Küçük Buton</Button>
                                <Button variant="primary" size="md">Normal Buton</Button>
                                <Button variant="primary" size="lg">Büyük Buton</Button>
                            </div>
                            <div className="flex flex-col gap-3 items-start">
                                <span className="text-sm font-medium text-gray-500">Secondary</span>
                                <Button variant="secondary" size="sm">Secondary Sm</Button>
                                <Button variant="secondary" size="md">Secondary Md</Button>
                                <Button variant="secondary" size="lg">Secondary Lg</Button>
                            </div>
                            <div className="flex flex-col gap-3 items-start">
                                <span className="text-sm font-medium text-gray-500">Danger</span>
                                <Button variant="danger" size="sm">İptal (Sm)</Button>
                                <Button variant="danger" size="md">Sil (Md)</Button>
                                <Button variant="danger" size="lg">Kalıcı Sil (Lg)</Button>
                            </div>
                            <div className="flex flex-col gap-3 items-start">
                                <span className="text-sm font-medium text-gray-500">Ghost</span>
                                <Button variant="ghost" size="sm">Ghost Sm</Button>
                                <Button variant="ghost" size="md">Ghost Md</Button>
                                <Button variant="ghost" size="lg">Ghost Lg</Button>
                            </div>
                        </div>
                    </section>

                    {/* INPUTS */}
                    <section>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 dark:border-gray-700">2. Input Varyantları</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            <Input label="Normal Input Alanı" placeholder="Bir şeyler yazın..." />
                            <Input label="Hatalı Input Alanı" defaultValue="Geçersiz format" error="Lütfen geçerli bir e-posta adresi girin." />
                            <div className="col-span-1 md:col-span-2">
                                <Input label="Textarea (Multiline) Input" multiline rows={3} placeholder="Uzun metinler için..." />
                            </div>
                        </div>
                    </section>

                    {/* CARDS */}
                    <section>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 dark:border-gray-700">3. Card Varyantları</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            <Card variant="elevated">
                                <h4 className="text-lg font-bold mb-2">Elevated (Gölgeli) Card</h4>
                                <p className="text-gray-600 dark:text-gray-400">Bu kartın varsayılan görünümüdür. Hafif gölge ve beyaz arkaplan içerir.</p>
                                <div className="mt-4"><Button variant="primary" size="sm">Aksiyon</Button></div>
                            </Card>

                            <Card variant="outline">
                                <h4 className="text-lg font-bold mb-2">Outline (Çerçeveli) Card</h4>
                                <p className="text-gray-600 dark:text-gray-400">Gölgelendirmesi olmayan, sade kenarlıkla çevrili alternatif kart tipidir.</p>
                                <div className="mt-4"><Button variant="secondary" size="sm">Aksiyon</Button></div>
                            </Card>
                        </div>
                    </section>

                    {/* ALERTS */}
                    <section>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2 dark:border-gray-700">4. Alert Varyantları</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Alert variant="info" title="Bilgi:">Sistem arka planda güncelleniyor.</Alert>
                            <Alert variant="success" title="Başarı:">Veriler başarıyla kaydedildi.</Alert>
                            <Alert variant="warning" title="Uyarı:">Şifrenizin süresi dolmak üzere.</Alert>
                            <Alert variant="error" title="Hata:">Sunucuya ulaşılamıyor!</Alert>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
