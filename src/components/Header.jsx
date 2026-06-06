import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

export default function Header({ title = 'Dashboard', subtitle = 'Resumo da sua vida financeira' }) {
  return (
    <header className="bg-white border-bottom px-4 py-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h2 className="h4 mb-1">{title}</h2>
          <p className="text-muted mb-0">{subtitle}</p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light position-relative rounded-circle p-2">
            <Bell size={20} />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle" style={{ width: '10px', height: '10px' }} />
          </button>

          <div className="d-flex align-items-center gap-2">
            <Avatar>
              <AvatarImage src="/profile.jpg" alt="Lucas" />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <span className="fw-medium">Olá, Lucas!</span>
          </div>
        </div>
      </div>
    </header>
  );
}
