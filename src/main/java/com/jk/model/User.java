/** 
 * <pre>项目名称:ssm-dubbo-consumers 
 * 文件名称:User.java 
 * 包名:com.jk.model 
 * 创建日期:2018年9月7日下午2:38:02 
 * Copyright (c) 2018, yuxy123@gmail.com All Rights Reserved.</pre> 
 */  
package com.jk.model;

import java.io.Serializable;

/** 
 * <pre>项目名称：ssm-dubbo-consumers    
 * 类名称：User    
 * 类描述：    
 * 创建人：曹丹亚 
 * 创建时间：2018年9月7日 下午2:38:02    
 * 修改人：曹丹亚
 * 修改时间：2018年9月7日 下午2:38:02    
 * 修改备注：       
 * @version </pre>    
 */
public class User implements Serializable {

	private static final long serialVersionUID = -7595347414711036858L;

	private String userId;
	
	private String birthday;
	

	private String password;

	private Integer sex;

	private String userName;



	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}



	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
