import './polyfills.server.mjs';
import{C as E,D as w,F as N,G as A,H as I,J as P,K as S,r as f,s as g,t as h,u as p,w as y,x as C}from"./chunk-6F2JFXXC.mjs";import{i as l,j as d,k as u}from"./chunk-5XUXGTUW.mjs";function a(e,n,i,t=""){return d(this,null,function*(){for(let r of e){let{path:o,redirectTo:c,loadChildren:T,children:R}=r;if(o===void 0)continue;let s=x(t,o);if(c!==void 0){yield{route:s,success:!1,redirect:!0};continue}if(/[:*]/.test(o)){yield{route:s,success:!1,redirect:!1};continue}if(yield{route:s,success:!0,redirect:!1},R?.length&&(yield*u(a(R,n,i,s))),T){let m=yield new l(P(r,n,i).toPromise());if(m){let{routes:_,injector:L=i}=m;yield*u(a(_,n,L,s))}}}})}function v(e,n){return d(this,null,function*(){let i=y(C,"server",[{provide:E,useValue:{document:n,url:""}},{provide:f,useFactory:()=>{class t extends f{ignoredLogs=new Set(["Angular is running in development mode."]);log(o){this.ignoredLogs.has(o)||super.log(o)}}return new t}},...w])();try{let t;V(e)?t=yield new l(e()):t=(yield new l(i.bootstrapModule(e))).injector.get(g),yield new l(h(t));let r=t.injector,o=r.get(S);if(o.config.length===0)yield{route:"",success:!0,redirect:!1};else{let c=r.get(p);yield*u(a(o.config,c,r))}}finally{i.destroy()}})}function V(e){return typeof e=="function"&&!("\u0275mod"in e)}function x(...e){return e.filter(Boolean).join("/")}export{v as extractRoutes,I as renderApplication,A as renderModule,f as \u0275Console,N as \u0275SERVER_CONTEXT};
