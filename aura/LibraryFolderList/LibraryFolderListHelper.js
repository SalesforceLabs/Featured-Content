({
    openSubFolder : function(cmp, e) {
        var folder = cmp.get('v.sFold');
        var ev = $A.get("e.c:openSFolder");
        console.log(ev);
        ev.setParams({
            contFolderId: folder.Id,
            libName : folder.Name
        });
        ev.fire();
    }
})