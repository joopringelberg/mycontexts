// This function returns a promise for the external role of the context of the role s that is passed in, or fails.
// It expands default namespaces and dereferences IndexedContext names.
// If the role is a context role, returns the binding of that role.
//  - pass through an external role
//  - expand namespace and dereference indexed contexts
//  - construct an external role for a context identifier
//  - return the context of the filler for a role identifier.
//  - throw an error in all other cases.

import { FIREANDFORGET, PDRproxy, RoleInstanceT, ValueT } from "perspectives-proxy";
import { externalRole, isExternalRole, RoleInstance } from "perspectives-react";

export default function ensureExternalRole(s : string) : Promise<RoleInstanceT>
{
  if ( isExternalRole( s ) )
  {
    return Promise.resolve( s as RoleInstanceT);
  }
  else
  {
    // Request the binding and then its context.
    return PDRproxy.then( proxy =>
      new Promise( function( resolve, reject )
        {
          proxy.matchContextName( s, 
            function (serialisedtables : { [key: string]: string }[])
              {
                const table = serialisedtables[0];
                if (table[s])
                {
                  resolve( externalRole( table[s] ))
                }
                else if (Object.values(table).length == 1)
                {
                  resolve( externalRole( Object.values(table)[0]) );
                }
                else
                {
                  proxy.getBinding( s as RoleInstanceT,
                    function (bindingIds)
                      {
                        if (bindingIds.length > 0)
                        {
                          if ( isExternalRole (bindingIds[0]))
                          {
                            resolve( bindingIds[0] );
                          }
                          else
                          {
                            proxy.getRolContext( bindingIds[0] ).then(
                              contextArr => resolve( externalRole( contextArr[0] ))
                            )
                          }
                        }
                        else
                        {
                          // Otherwise, either not a context role after all, or no binding. Fail.
                          return reject( new Error( "This role is not an external role and has no filler either, so cannot open a context for role: " + s ));
                        }
                      },
                    FIREANDFORGET,
                    function (e)
                    {
                      return reject(e);
                    });
                }
              }
            , FIREANDFORGET );
        }));
  }
}
