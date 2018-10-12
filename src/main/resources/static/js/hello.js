$(function(){
			initroletable();
			initpowertree(0);
		})
		function initroletable(){
			$('#roletable').datagrid({    
			    url:'../queryRoleList', 
			    singleSelect:true,
			    checkOnSelect:false,
			    selectOnCheck:false,
			    pagination:true,
			    pageNumber:1,
			    pageSize:3,
			    pageList:[3,4,5],
			    columns:[[    
					  
			        {field:'rid',title:'ID',width:100},    
			        {field:'rname',title:'角色名称',width:100},    
			        {field:'cz',title:'操作',width:180,
			        	formatter:function(value,row,index){
			        	return "<a href='javascript:bindpower(\""+row.rid+"\",\""+row.rname+"\");'>绑定权限</a>&nbsp;&nbsp;"+
			        	"<a class='icon-edit' onclick='editrole(\""+row.rid+"\")' >&nbsp;&nbsp;&nbsp;&nbsp;</a>"+
			        	"<a href='javascript:deleteRole(\""+row.rid+"\");'>删除</a>"
			        	}
			        }
			    ]],
			    toolbar:[{
			    	iconCls:'icon-add',
			    	text:'新增',
			    	handler:function(){
			    		$('#addDiv').dialog({
			    			title:'新增角色',
			    			href:'/user/toAddRole',
			    			width:200,
			    			height:250,
			    			buttons:[{
				    				text:'保存',
									handler:function(){
									$.ajax({
										    url:'/user/addZjwRole',
										    type:'post',
										    data:$('#addRoleForm').serialize(),
										    success:function(msg){
										    
										    }
									})
										
										$.messager.show({
											title:'我的消息',
											msg:'添加成功',
											timeout:2000,
											showType:'slide'
										});
										initroletable();
										$('#addDiv').dialog('close');
									}	
								},{
									text:'取消',
									handler:function(){
										$('#addDiv').dialog('close');
									}
								}]
			    		})
			    	}
			    },'-',{
					
					handler: function(){
						$.ajax({
							url:'../queryRoleList',
							type:'post',
							data:$("input[name='rid']:checked").serialize(),
							dataType:'json',
							success:function(result){
								initroletable();
							}
						})
					}
			}]
			})
		
		}
		function initpowertree(roleId){
			$('#powertree').tree({
				url:'../queryNavTreeByRoleId?roleId='+roleId,
				lines:true,
				checkbox:true
			})
		}
		function bindpower(id,name){
			$('#hideid').val(id)
			$('#rp').layout('panel','east').panel({title:name+"的权限"})
			initpowertree(id);
		}
		
		function deleteRole(id){
			$.ajax({
			    url:'/user/deleteRole?rid='+id,
			    type:'post',
			    
			    success:function(msg){
			    	initroletable()
			    }
		})
		}
		
		function savepower(){
			
			var rolehideid=$('#hideid').val();
			if(rolehideid==''||rolehideid==null){
				$.messager.alert('提示','未选择需要绑定权限角色','warning')
			}else{
				var treeArr=$('#powertree').tree('getChecked');
				var ids="";
				for (var i = 0 ; i < treeArr.length ; i++) {
					ids+=(ids=="" ? "":",")+treeArr[i].id;
				}
				
				$.ajax({
					url:'/user/saveRoleNav',
					data:{
						roleId:rolehideid,
						ids:ids
					},
					type:'post',
					dataType:'json',
					success:function(result){
						if(result==1){
							$.messager.alert('提示','绑定成功','info');
						}else{
							$.messager.alert('提示','绑定失败','error');
						}
					},
					
				})
			}
		}
		
		function editrole(id){
			$('#addDiv').dialog({
    			title:'修改角色',
    			href:'/user/toEditRole?rid='+id,
    			width:200,
    			height:250,
    			buttons:[{
	    				text:'保存',
						handler:function(){
							$.ajax({
							    url:'/user/updateRole',
							    type:'post',
							    data:$('#updateRoleForm').serialize(),
							    success:function(msg){
							    
							    }
						})
							$.messager.show({
								title:'我的消息',
								msg:'修改成功',
								timeout:2000,
								showType:'slide'
							});
							initroletable();
							$('#addDiv').dialog('close');
						}	
					},{
						text:'取消',
						handler:function(){
							$('#addDiv').dialog('close');
						}
					}]
    		})
		}
		
		function derivePoi(){
			alert("导出")
				location.href="/user/exportRoleExcel";
			}