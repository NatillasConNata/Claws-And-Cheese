package com.clawscndcheese.clawsandcheese;

public class Account {
    private long id;
	private String name;
	private String password;
	private boolean active;
    private float timer;

	
	public Account() {
	}
	public Account(long id, String name, String pas, boolean act, float time) {
		this.id= id;
		this.name=name;
		this.password=pas;
		this.active=act;
		this.timer = time;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean getActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

    public float getTime() {
		return timer;
	}

	public void setTime(float times) {
		this.timer = times;
	}

	@Override
	public String toString() {
		return "Account [id=" + id + ", name=" + name + ", password=" + password + ", active=" + active + "]";
	}
}
