import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-start gap-6 mb-16 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/projects/7ccbc68d-0a5e-40a3-9bf9-9ea1dcb90ec5/files/628ab264-64ac-4554-b03c-749e29960fdc.jpg"
            alt="App Logo"
            className="w-20 h-20 rounded-2xl shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AppFlow</h1>
            <p className="text-gray-600 text-lg">
              Революционное приложение для управления вашим временем и задачами. 
              Синхронизация в реальном времени, умные уведомления и красивый дизайн.
            </p>
          </div>
        </header>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-5xl font-bold leading-tight">
                Управляйте жизнью 
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> эффективно</span>
              </h2>
              <p className="text-xl text-gray-600">
                Современное приложение, которое объединяет планирование задач, 
                календарь и аналитику продуктивности в одном месте
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 shadow-xl">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать приложение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:border-primary">
                  Демо-версия
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/7ccbc68d-0a5e-40a3-9bf9-9ea1dcb90ec5/files/7fcd7884-4f18-4fa5-be9a-51bcf89eaa13.jpg"
                alt="App Screenshot"
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Ключевые преимущества</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Молниеносная скорость</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Оптимизированная производительность и мгновенная синхронизация между всеми вашими устройствами
              </p>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Icon name="Brain" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Умные алгоритмы</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                ИИ-помощник автоматически приоритезирует задачи и предлагает оптимальное расписание дня
              </p>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Полная безопасность</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                End-to-end шифрование данных и полный контроль над вашей приватностью
              </p>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-12 text-center text-white shadow-2xl animate-fade-in">
          <h3 className="text-4xl font-bold mb-4">Готовы начать?</h3>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к 50,000+ пользователей, которые уже повысили свою продуктивность
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 shadow-xl">
            <Icon name="Rocket" className="mr-2" size={20} />
            Начать бесплатно
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;
