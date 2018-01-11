package com.revature.model;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum ErsReimbursementType {
	
	DEFAULT(0);
	
	private final int id;
	
	private ErsReimbursementType(int id) {
		this.id = id;
	}
	
	public int getId() {
		return id;
	}
	
	private static final Map<Integer, ErsReimbursementType> map;
    static {
        map = new HashMap<Integer, ErsReimbursementType>();
        for (ErsReimbursementType type : ErsReimbursementType.values()) {
            map.put(type.id, type);
        }
    }
    public static ErsReimbursementType findById(int i) {
        return map.get(i);
    }
    
    private static Map<String, ErsReimbursementType> namesMap = new HashMap<String, ErsReimbursementType>(3);

    static {
        namesMap.put("default", DEFAULT);
    }

    @JsonCreator
    public static ErsReimbursementType forValue(String value) {
        return namesMap.get(value.toLowerCase());
    }

    @JsonValue
    public String toValue() {
        for (Entry<String, ErsReimbursementType> entry : namesMap.entrySet()) {
            if (entry.getValue() == this)
                return entry.getKey();
        }

        return null; // or fail
    }

}
