
import React from 'react';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="card-grid">
        {/* Верхний левый карточка с заголовком */}
        <div className="card p-8 flex flex-col justify-between">
          <div>
            <div className="logo-circle">VG</div>
            <h1 className="headline text-white mb-4">
              РЕШЕНИЕ ПО СИСТЕМЕ АВТОМАТИЗАЦИИ ГОСТИНИЧНЫХ НОМЕРОВ GRMS <span className="subtext">(GUEST ROOM MANAGEMENT SYSTEM)</span> И ПОДВИЖНЫМ МЕХАНИЗМАМ (ШТОРАМ)
            </h1>
          </div>
          <div className="flex items-center mt-8">
            <span className="dot-indicator"></span>
            <p className="text-sm text-gray-400">для отеля по адресу: Ереван, Абовяна 5/5</p>
          </div>
        </div>

        {/* Верхний правый карточка с ноутбуками */}
        <div className="card p-4 flex items-center justify-center">
          <div className="laptop-container">
            <img 
              src="https://cdn.poehali.dev/files/e51f43ad-81df-447e-8fed-8e1a3b0300a4.jpg" 
              alt="Ноутбуки с планами отеля" 
              className="laptop-image"
            />
          </div>
        </div>

        {/* Нижний левый карточка с текстурами */}
        <div className="card p-8 flex flex-col justify-between">
          <h2 className="text-2xl text-gray-500 mb-8">Текстуры</h2>
          <div className="texture-circles">
            <div className="texture-circle texture-circle-1"></div>
            <div className="texture-circle texture-circle-2"></div>
            <div className="texture-circle texture-circle-3"></div>
          </div>
        </div>

        {/* Нижний правый карточка с фото */}
        <div className="card overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Профессиональный персонал отеля" 
            className="card-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
