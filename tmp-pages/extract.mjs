import * as pdfjs from 'file:///C:/Program%20Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1112-737-0_26.1112.737.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/pdfjs-dist/legacy/build/pdf.mjs';
import {readFileSync,writeFileSync} from 'node:fs';
const pages=[1,2,4,5,6,7,8,9,10,11,12,13,15,16,17,18,20];
const doc=await pdfjs.getDocument({data:new Uint8Array(readFileSync('Redações Agatha - Google Docs.pdf'))}).promise;
const out=[];
for(const n of pages){
 const p=await doc.getPage(n), t=await p.getTextContent(), rows=new Map();
 for(const x of t.items){const s=x.str.trim();if(!s)continue;const y=Math.round(x.transform[5]);if(!rows.has(y))rows.set(y,[]);rows.get(y).push({x:x.transform[4],s});}
 const lines=[...rows.entries()].sort((a,b)=>b[0]-a[0]).map(([y,a])=>{a.sort((u,v)=>u.x-v.x);return {y,x:a[0].x,text:a.map(z=>z.s).join(' ').replace(/\s+/g,' ').trim()};});
 const paras=[];let cur='',prev=null;
 for(const l of lines){if(prev!==null&&((prev-l.y>21)||(l.x>110&&cur.trim()))&&cur.trim()){paras.push(cur.trim());cur='';}cur+=(cur?' ':'')+l.text;prev=l.y;}
 if(cur.trim())paras.push(cur.trim());
 const fixed=paras.map(s=>s.replace(/-\s+(?=[a-záàâãéêíóôõúüç])/g,'-').replace(/\s+([,.;:!?])/g,'$1').replace(/\s+/g,' ').trim());
 out.push({page:n,title:fixed.shift()||'',paragraphs:fixed});
}
writeFileSync('js/essay-content.js','window.ESSAY_CONTENT = '+JSON.stringify(out,null,2)+';\n','utf8');
console.log(out.map(x=>`${x.page}: ${x.paragraphs.length} parágrafos`).join('\n'));
