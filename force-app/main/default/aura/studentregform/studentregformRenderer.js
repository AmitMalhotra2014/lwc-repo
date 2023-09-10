({
 
    render:function(cmp,hpr) {
        var r= this.superRender();
        alert('From Render Method-->' + cmp.get("v.sName"));
        return r;
    },

    afterRender:function(cmp,hpr) {
        
        this.superAfterRender();
        alert('From AfterRender Method-->');
    },

    rerender:function(cmp,hpr) {
       
        this.superRerender();
         alert('From ReRender Method-->');
    },

    unrender:function(cmp,hpr) {
        
        this.Unrender();
        alert('From UnRender Method-->');
    },

})