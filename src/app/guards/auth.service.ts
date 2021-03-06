import { Injectable } from '@angular/core';
import { Router , CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,
  			  state:RouterStateSnapshot){
      let user = JSON.parse(localStorage.getItem('currentUser'));
      console.log(user);
  		if(user && user.token){
  			// logged in so return true
            return true;
  		}
  		// not logged in so redirect to login page with the return url
  		this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
  		return false;

  }

}
