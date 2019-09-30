import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log("roles guard");
    console.log(roles);
    
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    
    
    const user = request.user;
    console.log(roles);
    console.log(user);
    
    
    if (roles.includes(user))
    {
      return true;
    }
    else 
     return false
    
    
  }
}